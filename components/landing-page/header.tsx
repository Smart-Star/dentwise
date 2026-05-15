import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { landing_page_nav_links } from ".";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className='fixed top-0 inset-x-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16'>
      <nav className='max-w-6xl mx-auto flex justify-between items-center'>
        <Link href='/' className='flex items-center gap-2'>
          <Image
            src='/logo.png'
            alt='logo'
            width={32}
            height={32}
            className='w-11'
          />
          <span className='font-semibold text-lg'>DentWise</span>
        </Link>

        <div className='hidden md:flex items-center gap-8'>
          {landing_page_nav_links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='text-muted-foreground hover:text-foreground'>
              {link.label}
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-3'>
          <SignInButton mode='modal'>
            <Button variant='ghost' size='sm'>
              Login
            </Button>
          </SignInButton>
          <SignUpButton mode='modal'>
            <Button size='sm'>Sign Up</Button>
          </SignUpButton>
        </div>
      </nav>
    </header>
  );
}
