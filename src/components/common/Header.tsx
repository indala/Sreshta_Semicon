'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks, programLinks } from '@/lib/constants';
import { Logo } from './Logo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 my-1">
      <div className="container flex h-16 items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6 lg:gap-8 ml-auto text-[1.1rem] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary text-foreground/60 focus:outline-none">
              Programs <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {programLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/contact"
            className={cn(
              'transition-colors hover:text-primary',
              pathname === "/contact" ? 'text-primary' : 'text-foreground/60'
            )}
          >
            Contact Us
          </Link>

          <Link
            href="/register"
            className="ml-4 px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              {/* Big Hamburger Button */}
              <button
                className="flex items-center justify-center w-16 h-16  bg-foreground/5 hover:bg-foreground/10 focus:outline-none"
              >
                <Menu size={30} className="  text-primary" />
                <span className="sr-only">Open Menu</span>
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full max-w-xs overflow-y-auto">
              <SheetHeader>
                <SheetTitle asChild><Logo /></SheetTitle>
                <SheetDescription className="sr-only">
                  Mobile navigation menu for Sreshta Semicon
                </SheetDescription>
                
              </SheetHeader>

              <nav className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors p-2 rounded-md',
                      pathname === link.href
                        ? 'bg-primary/10 text-primary hover:bg-primary/20'
                        : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                <Accordion type="single" collapsible defaultValue="programs" className="w-full">
                  <AccordionItem value="programs" className="border-b-0">
                    <AccordionTrigger
                      className={cn(
                        'text-lg font-medium transition-colors hover:no-underline p-2 rounded-md',
                        programLinks.some(link => pathname.startsWith(link.href))
                          ? 'bg-primary/10 text-primary hover:bg-primary/20'
                          : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                      )}
                    >
                      Programs
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <div className="flex flex-col gap-2 mt-2">
                        {programLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={cn(
                              'text-base font-medium transition-colors p-2 rounded-md',
                              pathname === link.href
                                ? 'bg-primary/10 text-primary hover:bg-primary/20'
                                : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                            )}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'text-lg font-medium transition-colors p-2 rounded-md',
                    pathname === "/contact"
                      ? 'bg-primary/10 text-primary hover:bg-primary/20'
                      : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  Contact Us
                </Link>

                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold text-center block"
                >
                  Register Now
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
