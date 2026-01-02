
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="hidden md:flex md:items-center md:gap-6 lg:gap-8 ml-auto text-sm font-medium">
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

          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </nav>

        <div className="md:hidden ml-auto">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs overflow-y-auto">
               <SheetHeader>
                <SheetTitle asChild><Logo /></SheetTitle>
                <SheetDescription className="sr-only">
                  Mobile navigation menu for Sreshta Semicon, offering access to all pages including home, about, programs, contact, and registration.
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
                        : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground',
                      pathname === link.href && 'hover:text-primary'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                <Accordion type="single" collapsible defaultValue="programs" className="w-full">
                  <AccordionItem value="programs" className="border-b-0">
                    <AccordionTrigger className={cn(
                      'text-lg font-medium transition-colors hover:no-underline p-2 rounded-md',
                       programLinks.some(link => pathname.startsWith(link.href))
                        ? 'bg-primary/10 text-primary hover:bg-primary/20'
                        : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground',
                       programLinks.some(link => pathname.startsWith(link.href)) && 'hover:text-primary'
                    )}>
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

                <Button asChild className="mt-4">
                  <Link href="/register" onClick={() => setMenuOpen(false)}>Register Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
