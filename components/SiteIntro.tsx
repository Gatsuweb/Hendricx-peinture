import Image from "next/image";
import styles from "./SiteIntro.module.css";

// Runs before paint; the intro stays hidden if JavaScript is disabled.
const introScript = `(() => {
  const intro = document.getElementById('site-intro');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!intro || motion.matches || location.pathname !== '/' || location.hash) return;
  try {
    if (sessionStorage.getItem('hendricx-intro-seen')) return;
    sessionStorage.setItem('hendricx-intro-seen', 'true');
  } catch {
    // Storage can be unavailable in private browsing.
  }
  let fallback;
  const finish = () => {
    intro.removeAttribute('data-active');
    window.clearTimeout(fallback);
    intro.removeEventListener('animationend', onAnimationEnd);
    window.removeEventListener('keydown', finish);
    window.removeEventListener('pointerdown', finish);
    window.removeEventListener('wheel', finish);
    window.removeEventListener('pagehide', finish);
    motion.removeEventListener('change', finish);
  };
  const onAnimationEnd = (event) => {
    if (event.target === intro) finish();
  };
  intro.setAttribute('data-active', 'true');
  intro.addEventListener('animationend', onAnimationEnd);
  window.addEventListener('keydown', finish);
  window.addEventListener('pointerdown', finish, { passive: true });
  window.addEventListener('wheel', finish, { passive: true });
  window.addEventListener('pagehide', finish);
  motion.addEventListener('change', finish);
  fallback = window.setTimeout(finish, 2600);
})();`;

export function SiteIntro() {
  return (
    <>
      <div id="site-intro" className={styles.intro} aria-hidden="true" suppressHydrationWarning>
        <div className={styles.signature}>
          <span className={styles.eyebrow}>Artisan &amp; artiste peintre</span>
          <div className={styles.wordmarkMask}>
            <Image
              className={styles.wordmark}
              src="/logo-hendricx.png"
              alt="Hendricx Peinture"
              width={475}
              height={62}
              preload
            />
          </div>
          <span className={styles.stroke} />
          <span className={styles.disciplines}>Peinture <i /> Fresque</span>
        </div>
        <span className={styles.location}>Centre Bretagne</span>
      </div>
      <script dangerouslySetInnerHTML={{ __html: introScript }} />
    </>
  );
}
