import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.grid} reveal`}>
        <div className={styles.brandBlock}>
          <div className={styles.brand}>Hendricx Peinture</div>
          <p>
            Nicolas Hendricx, artisan peintre sur Paule, en Centre Bretagne.
            Peinture intérieure, rénovation et fresques murales sur mesure.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>
              <Link href="/services/renovation">Rénovation intérieure</Link>
            </li>
            <li>
              <Link href="/services/fresque">Fresque murale</Link>
            </li>
            <li>
              <Link href="/realisations">Réalisations</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Zones</h4>
          <ul>
            <li>
              <span>Carhaix-Plouguer</span>
            </li>
            <li>
              <span>Rostrenen</span>
            </li>
            <li>
              <Link href="/contact">Devis peinture</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Informations</h4>
          <ul>
            <li>
              <Link href="/mentions-legales">Mentions legales</Link>
            </li>
            <li>
              <Link href="/politique-confidentialite">Confidentialite</Link>
            </li>
            <li>
              <Link href="/conditions-generales">Conditions generales</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.bottom} reveal delay200`}>
        <span>© 2026 Hendricx Peinture. Paule 22340.</span>
      </div>
    </footer>
  );
}
