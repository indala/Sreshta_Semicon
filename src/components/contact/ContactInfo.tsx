
import InfoCard from "@/components/contact/InfoCard";
import { contactDetails, socialLinks } from "@/lib/constants";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";
import { MotionSection } from "@/components/common/MotionSection";

export default function ContactInfo() {
  return (
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
  );
}
