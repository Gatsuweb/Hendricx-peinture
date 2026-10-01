# Suivi des conversions Hendricx Peinture

## Configuration

- `NEXT_PUBLIC_GTM_ID` : identifiant du conteneur GTM. Le conteneur fourni est `GTM-5HK7H9W9`. Il est configuré dans le `.env` local (ignoré par Git) ; définir la même variable dans l'hébergement avant le déploiement, puis reconstruire l'application.
- `NEXT_PUBLIC_CONTACT_PHONE` : numéro professionnel affiché par les liens d'appel. La valeur publique par défaut est `07 81 25 10 85` et peut être remplacée dans l'environnement de déploiement.
- Les identifiants GA4 et Google Ads restent à définir dans GTM. Aucun identifiant fictif n'est intégré.

## Réponses du formulaire

`POST /api/contact` renvoie une réponse discriminée :

- `200 {"status":"accepted"}` : la demande a été acceptée par le fournisseur d'e-mail ; le formulaire émet `generate_lead`.
- `200 {"status":"blocked"}` : honeypot rempli, aucun e-mail envoyé et aucun événement de conversion.
- `400 {"status":"error","reason":"validation"}` : données invalides.
- `500/502 {"status":"error","reason":"technical"}` : configuration ou transmission défaillante.

Une réponse HTTP 200 ne suffit donc jamais à compter un lead. Le client vérifie explicitement `status === "accepted"`.

## Événements du dataLayer

| Événement | Déclencheur | Paramètres transmis |
| --- | --- | --- |
| `generate_lead` | Réponse `accepted` après un envoi de devis | `lead_type: "contact_form"` |
| `email_click` | Clic sur l'adresse commerciale de la page Contact | Aucun |
| `phone_click` | Clic sur un lien d'appel de la page Contact, du menu mobile ou d'une page locale | Aucun |

Aucun nom, e-mail, téléphone, texte du message ni autre donnée personnelle n'est envoyé au dataLayer par ces fonctions. Les clics mesurent l'intention, pas la réalisation d'un appel ou l'envoi effectif d'un e-mail depuis le logiciel de messagerie.

## Consentement et chargement de GTM

Les quatre états Consent Mode (`analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`) sont initialisés à `denied` avant l'hydratation. La bannière permet accepter, refuser et personnaliser. Le choix est conservé dans `localStorage` sous `hendricx-consent-v1` et le bouton « Gérer les cookies » permet de le modifier.

Cette intégration utilise une approche de type **basic** : aucun conteneur GTM n'est chargé avant un accord explicite pour au moins une finalité. Les événements enregistrés localement avant le chargement de GTM sont retirés de la file avant ce chargement, pour éviter leur transmission rétroactive. Après un retrait total, la page se recharge pour décharger le conteneur actif. Les commandes Consent Mode `default` et `update` restent présentes dans le dataLayer.

Le code `noscript` standard n'est pas installé : il chargerait GTM en dehors de la bannière. En l'absence de JavaScript, aucun suivi Google ne se déclenche.

## Vérification dans la console du navigateur

1. Ouvrir `/contact` en navigation privée, puis la console. Avant tout choix, vérifier `window.dataLayer` et l'absence de requête `gtm.js` dans l'onglet Réseau.
2. Cliquer « Tout refuser ». Vérifier que `localStorage.getItem("hendricx-consent-v1")` contient quatre valeurs `denied` et qu'aucune requête `gtm.js` n'a été faite.
3. Cliquer « Gérer les cookies », puis « Tout accepter ». Vérifier une requête vers `gtm.js?id=GTM-5HK7H9W9` si la variable est configurée. Contrôler les états dans Tag Assistant.
4. Cliquer l'e-mail commercial. Lire `window.dataLayer.filter(item => item?.event === "email_click")`. Une nouvelle entrée doit apparaître.
5. Pour tester le honeypot sans envoyer d'e-mail, saisir des valeurs de test dans le formulaire, puis exécuter `document.querySelector('input[name="website"]').value = 'robot'` et `document.querySelector('form').requestSubmit()`. Le formulaire doit indiquer que la demande n'a pas été envoyée. `window.dataLayer.filter(item => item?.event === "generate_lead")` ne doit pas gagner d'entrée.
6. Pour tester un lead réel, vider le honeypot, saisir une demande de test et vérifier que l'e-mail est accepté par Resend. Une seule entrée `{ event: "generate_lead", lead_type: "contact_form" }` doit apparaître. Ne pas utiliser de données personnelles dans les captures ou journaux de test.
7. Cliquer sur un lien d'appel et vérifier `window.dataLayer.filter(item => item?.event === "phone_click")`. Une nouvelle entrée doit apparaître, sans numéro de téléphone dans ses propriétés.
8. Dans « Gérer les cookies », refuser à nouveau et vérifier que les états deviennent `denied` et que le conteneur n'est plus chargé après le rechargement.

## Configuration restante dans GTM, GA4 et Google Ads

1. Publier le conteneur GTM réel et vérifier avec Tag Assistant que le défaut `denied` est appliqué avant tout tag. Configurer les balises Google avec les contrôles de consentement appropriés. La documentation Google recommande les API de consentement des modèles GTM pour garantir l'ordre des mises à jour lorsque des balises GTM gèrent elles-mêmes le consentement ; vérifier le séquencement du conteneur dans Tag Assistant.
2. Dans GTM, créer trois déclencheurs de type « Événement personnalisé » correspondant exactement à `generate_lead`, `phone_click` et `email_click`. Créer au besoin une variable dataLayer `lead_type`. Ne mapper aucun champ du formulaire dans GTM.
3. Dans GA4, configurer le Google tag avec le vrai Measurement ID, envoyer les trois événements et marquer `generate_lead` comme événement clé. Décider si les clics téléphone et e-mail sont seulement des événements ou aussi des événements clés. Éviter les doublons avec d'autres règles automatiques.
4. Dans Google Ads, créer les vraies actions de conversion depuis le compte Ads et utiliser leurs identifiants/libellés réels dans GTM, ou importer les événements clés GA4. Choisir une seule méthode de comptage pour chaque objectif afin d'éviter les doublons. Tester l'attribution avec un clic d'annonce réel lorsque la campagne sera prête.
5. Vérifier la politique de confidentialité et prévoir une politique cookies détaillant les finalités, Google/GTM/GA4/Ads réellement activés, la durée de conservation du choix, les éventuels cookies et destinataires, le retrait et la suppression éventuelle de traceurs déjà déposés. Faire valider ces textes pour la configuration finale ; cette implémentation n'est pas un avis juridique.
