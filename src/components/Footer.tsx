import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="flex justify-center w-full px-4 py-8 border-t bg-card md:px-8 md:py-12">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-10">
          <div className="space-y-4 md:col-span-2 lg:col-span-3">
            <div className="flex items-center font-bold tracking-tight">
              <Image
                src="/logo-tbs.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-10 md:w-12"
              />

              <h3 className="mt-2">PT. Teman Berkah Sentosa</h3>
            </div>

            <p className="text-sm">
              Transforming technology, empowering education, building
              Indonesia&apos;s digital future.
            </p>
          </div>

          <nav className="text-sm lg:col-span-2">
            <p className="font-semibold uppercase">Solutions</p>

            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Enterprise Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Emerging Tech
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Cyber Security
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="text-sm lg:col-span-2">
            <p className="font-semibold uppercase">Products & Services</p>

            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Smart Keys
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  iShield Key SwissBit
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Web Design & Development
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-2 text-sm lg:col-span-3">
            <p className="font-semibold uppercase">Contact</p>

            <ul className="mt-2 space-y-2">
              <li className="text-muted-foreground">+62 811 97 300 300</li>
              <li className="text-muted-foreground">
                info@temanberkahsentosa.com
              </li>
              <li className="text-muted-foreground">
                ONE Pacific Place, 15th Floor, Jl. Jend. Sudirman Kav. 52-53
                Jakarta 12190
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-12 pt-6 border-t border-border text-center md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 PT. Teman Berkah Sentosa. All rights reserved.
          </p>

          <ul className="flex items-center gap-4 text-sm">
            <li>
              <Link
                href="/"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Privacy
              </Link>
            </li>

            <Separator orientation="vertical" />

            <li>
              <Link
                href="/"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Term
              </Link>
            </li>

            <Separator orientation="vertical" />

            <li>
              <Link
                href="/"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Security
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
