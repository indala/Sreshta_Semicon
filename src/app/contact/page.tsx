import { PageHeader } from "@/components/common/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactDetails, socialLinks } from "@/lib/constants";
import { Mail, MapPin, Phone, Instagram, Linkedin } from "lucide-react";
import type { Metadata } from 'next';
import { MotionSection } from "@/components/common/MotionSection";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";

export const metadata: Metadata = {
  title: 'Contact Us | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Get in touch with SRESHTA SEMICON for course inquiries, corporate training, or any other questions. We are here to help.',
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="We're here to help. Reach out to us with any questions or inquiries."
        imageId="contact-header"
      />

      <MotionSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <MotionSection delay={0.2} direction="right">
                <h2 className="text-3xl font-bold font-headline mb-6">Get in Touch</h2>
              </MotionSection>
              <MotionGrid staggerDelay={0.1} className="space-y-6">
                <MotionItem>
                  <InfoCard
                    icon={<Phone className="h-6 w-6 text-primary" />}
                    title="Phone"
                    content={
                      <>
                        <a href={`tel:${contactDetails.phone1}`} className="block hover:underline">{contactDetails.phone1}</a>
                        <a href={`tel:${contactDetails.phone2}`} className="block hover:underline">{contactDetails.phone2}</a>
                      </>
                    }
                  />
                </MotionItem>
                <MotionItem>
                  <InfoCard
                    icon={<Mail className="h-6 w-6 text-primary" />}
                    title="Email"
                    content={<a href={`mailto:${contactDetails.email}`} className="hover:underline">{contactDetails.email}</a>}
                  />
                </MotionItem>
                <MotionItem>
                  <InfoCard
                    icon={<MapPin className="h-6 w-6 text-primary" />}
                    title="Address"
                    content={<p>{contactDetails.address}</p>}
                  />
                </MotionItem>
                <MotionItem>
                  <InfoCard
                    icon={<Linkedin className="h-6 w-6 text-primary" />}
                    title="LinkedIn"
                    content={<a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">Follow us on LinkedIn</a>}
                  />
                </MotionItem>
                <MotionItem>
                  <InfoCard
                    icon={<Instagram className="h-6 w-6 text-primary" />}
                    title="Instagram"
                    content={<a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">@{socialLinks.instagram.split('/').pop()}</a>}
                  />
                </MotionItem>
              </MotionGrid>
            </div>

            <MotionSection delay={0.4} direction="left">
              <Card className="p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </MotionSection>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-primary/10 p-3 rounded-lg mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg text-foreground">{title}</h3>
        <div className="text-muted-foreground">{content}</div>
      </div>
    </div>
  );
}