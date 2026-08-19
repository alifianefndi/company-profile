"use client";

import * as React from "react";
import Link from "next/link";
import { Headset, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { navLinks } from "@/utils/content";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="flex justify-center sticky top-0 z-50 w-full h-16 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex items-center justify-between px-4 w-full max-w-7xl h-full">
        <div>
          <Link href="/" className="flex items-center font-bold tracking-tight">
            <Image
              src="/logo-tbs.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 md:w-12"
            />

            <h3 className="md:hidden lg:block">Teman Berkah Sentosa</h3>
          </Link>
        </div>

        <div className="hidden md:flex md:items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  {link.items ? (
                    <>
                      <NavigationMenuTrigger>
                        {link.title}
                      </NavigationMenuTrigger>

                      <NavigationMenuContent>
                        <ul className={cn("grid gap-2 p-2", link?.className)}>
                          {link.items.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                            />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      render={<Link href={link.href}>{link.title}</Link>}
                    />
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Button
          variant="default"
          className="hidden items-center gap-2 px-4 rounded-full md:flex"
        >
          Help
          <Headset />
        </Button>

        <div ref={menuRef} className="flex md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="[&_svg:not([class*='size-'])]:size-5"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X strokeWidth={2} /> : <Menu strokeWidth={2} />}
          </Button>

          <div
            className={cn(
              "absolute top-full left-0 w-full flex flex-col p-6 gap-5 overflow-y-auto bg-background border-y shadow-lg transition-all duration-300 ease-in-out md:hidden",
              isOpen
                ? "max-h-[calc(100vh-4rem)] opacity-100"
                : "max-h-0 opacity-0 border-none",
            )}
          >
            {navLinks.map((link) => (
              <div key={link.title}>
                {link.items ? (
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold">{link.title}</span>
                    <div className="flex flex-col gap-3 pl-4 border-l-2">
                      {link.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="font-semibold hover:text-primary transition-colors block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}

            <Button
              variant="default"
              className="flex items-center gap-2 px-4 py-5 rounded-full text-base"
            >
              <span>Help</span>

              <Headset />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function ListItem({
  className,
  title,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
          </Link>
        }
      />
    </li>
  );
}
