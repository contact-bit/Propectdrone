import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="ProspectDrone — Accueil">
      <Image
        src={siteConfig.logo}
        alt="ProspectDrone — Inspection du bâtiment"
        width={1774}
        height={887}
        sizes="(max-width: 760px) 150px, 180px"
        className="brand-logo"
      />
    </Link>
  );
}
