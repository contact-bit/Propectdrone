import Link from "next/link";
import { navigation } from "@/data/site-config";
import { Container, Button } from "@/components/ui";
import { Brand } from "./Brand";
import { MobileMenu } from "./MobileMenu";
export function Header() {
  return (
    <header className="header">
      <Container className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-cta">
          <Button>Demander un devis</Button>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}
