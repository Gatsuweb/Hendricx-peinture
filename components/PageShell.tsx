import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollEffects } from "./ScrollEffects";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <ScrollEffects />
      {children}
      <Footer />
    </>
  );
}
