"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const links = [
  { href: "/about", label: "Sobre Aikido" },
  { href: "/dojo", label: "Dojo" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-3 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/img/iwamashinshinlogo-2.png"
            alt="Iwama Shinshin Aiki Shuren Kai"
            width={200}
            height={60}
            priority
            className="h-auto w-[140px] sm:w-[180px]"
          />
        </Link>

        <NavigationMenu className="hidden md:flex">
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

        <Sheet open={open} onOpenChange={setOpen}>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            className="rounded-md p-2 text-white hover:bg-white/10 md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
          <SheetContent side="right" className="bg-black text-white">
            <SheetHeader>
              <SheetTitle className="text-white">Menú</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pb-4">
              {links.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <Link
                      href={link.href}
                      className="rounded-md px-3 py-3 text-base font-bold text-white hover:bg-white/10"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
