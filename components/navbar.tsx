"use client";

import Link from "next/link";
import { nav_links } from ".";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";

export function Navbar() {
  const { user } = useUser();
  const pathName = usePathname();

  return (
    <header className='fixed top-0 inset-x-0 z-50 px-6 py-2 h-16 border-b border-border/50 bg-background backdrop-blur-md'>
      <nav className='max-w-7xl mx-auto flex justify-between items-center h-full'>
        <div className='flex items-center gap-8'>
          {/* Logo */}
          <Link href='/dashboard' className='flex items-center gap-2'>
            <Image
              src='/logo.png'
              alt='logo'
              width={32}
              height={32}
              className='w-11'
            />
          </Link>

          {/* Navigation Links */}
          <div className='flex items-center gap-6'>
            {nav_links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "flex items-center gap-2",
                  pathName === link.href
                    ? "text-foreground hover:text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground",
                )}>
                <link.icon className='size-4' />
                <span className='hidden md:inline'>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <p className='hidden lg:flex flex-col items-end'>
            <span className='text-sm font-medium text-foreground'>
              {user?.firstName} {user?.lastName}
            </span>
            <span className='text-xs text-muted-foreground'>
              {user?.emailAddresses[0].emailAddress}
            </span>
          </p>

          <UserButton />
        </div>
      </nav>
    </header>
  );
}
