import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const links = [
  { href: "/about", label: "Sobre Aikido" },
  { href: "/dojo", label: "Dojo" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-black px-6 py-2">
      <Link href="/" className="flex items-center">
        <Image
          src="/img/iwamashinshinlogo-2.png"
          alt="Iwama Shinshin Aiki Shuren Kai"
          width={200}
          height={60}
          priority
          className="h-auto w-[140px] sm:w-[200px]"
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          {links.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink
                render={
                  <Link
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-bold text-white hover:bg-white/10"
                  />
                }
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
