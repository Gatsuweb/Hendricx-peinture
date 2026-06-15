import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.grid} reveal`}>
        <div className={styles.brandBlock}>
          <div className={styles.brand}>Hendricx Peinture</div>
          <p>
            Artisan peintre a Paule : peinture interieure, exterieure, renovation et
            fresques murales en Centre Bretagne.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>
              <Link href="/services/renovation">Renovation interieure</Link>
            </li>
            <li>
              <Link href="/services/fresque">Fresque murale</Link>
            </li>
            <li>
              <Link href="/realisations">Realisations</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Zones</h4>
          <ul>
            <li>
              <Link href="/">Peintre Carhaix-Plouguer</Link>
            </li>
            <li>
              <Link href="/">Peintre Rostrenen</Link>
            </li>
            <li>
              <Link href="/">Devis peinture</Link>
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
