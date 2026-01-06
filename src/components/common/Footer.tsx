
import Link from 'next/link';
import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

import { contactDetails, navLinks, socialLinks, programLinks } from '@/lib/constants';
import { Logo } from './Logo';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm max-w-xs">
              Your closest access to semiconductor excellence. We are committed to bridging the gap between academia and industry.
            </p>
             <div className="flex space-x-4 mt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
               <Button variant="ghost" size="icon" asChild>
                <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="X">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold font-headline text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[...navLinks, ...programLinks].slice(0, 5).map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
               <li>
                  <Link href="/register" className="text-sm hover:text-primary transition-colors">
                    Register
                  </Link>
                </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold font-headline text-lg mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <Link href="https://maps.app.goo.gl/WoWzx97tF5UycKFo6">{contactDetails.address}</Link>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 shrink-0" />
                <a href={`mailto:${contactDetails.email}`} className="hover:text-primary transition-colors">{contactDetails.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 shrink-0" />
                <div>
                    <a href={`tel:${contactDetails.phone1}`} className="hover:text-primary transition-colors block">{contactDetails.phone1}</a>
                    <a href={`tel:${contactDetails.phone2}`} className="hover:text-primary transition-colors block">{contactDetails.phone2}</a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold font-headline text-lg mb-4 text-foreground">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest courses and news.</p>
            {/* Newsletter form can be added here in the future */}
            <p className="text-xs text-muted-foreground">Subscribe to get our latest content by email.</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SRESHTA SEMICON TECHNOLOGIES PVT LTD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}