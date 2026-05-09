import Image from "next/image";
import { footer_links } from ".";

export function Footer() {
  return (
    <footer className='px-6 py-12 border-t bg-muted/30'>
      <section className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-4 gap-8 sm:gap-16'>
          {/* Logo */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <Image
                src='/logo.png'
                alt='DentWise Logo'
                width={32}
                height={32}
                className='w-8 h-8'
              />
              <span className='font-semibold text-lg'>DentWise</span>
            </div>
            <p className='text-sm text-muted-foreground'>
              AI-powered dental assistance that actually helps.
            </p>
          </div>

          {footer_links.map((item) => (
            <div key={item.title}>
              <h4 className='font-medium mb-3'>{item.title}</h4>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                {item.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className='hover:text-foreground'>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='border-t mt-8 pt-8 text-center text-sm text-muted-foreground'>
          <p>
            &copy; 2026 DentWise. Built for real people with real dental
            questions.
          </p>
        </div>
      </section>
    </footer>
  );
}
