
import InfoCard from "@/components/contact/InfoCard";
import { contactDetails, socialLinks } from "@/lib/constants";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";
import { MotionSection } from "@/components/common/MotionSection";

export default function ContactInfo() {
  return (
    <div>
      <MotionSection delay={0.2} direction="right">
        <h2 className="text-3xl font-bold font-headline mb-6">
          Get in Touch
        </h2>
      </MotionSection>

      <MotionGrid staggerDelay={0.1} className="space-y-6">

        {/* Phone */}
        <MotionItem>
  <InfoCard
    icon={<FaPhoneAlt className="h-6 w-6 text-primary" />}
    title="Phone"
    content={
      <div className="flex  gap-5 space-y-1">
        <a
          href={`tel:${contactDetails.phone1}`}
          className=" hover:bg-red-300 rounded  p-2 "
        >
          {contactDetails.phone1}
        </a>
        <a
          href={`tel:${contactDetails.phone2}`}
          className=" hover:bg-red-300 rounded  p-2 "
        >
          {contactDetails.phone2}
        </a>
      </div>
    }
  />
</MotionItem>


        {/* Email */}
        <MotionItem>
            <InfoCard
              icon={<FaEnvelope className="h-6 w-6 text-primary" />}
              title="Email"
              content={
                <div className="flex gap-5 flex-wrap">
              <a href={`mailto:${contactDetails.email1}`}>{contactDetails.email1}</a>
              <a href={`mailto:${contactDetails.email2}`}>{contactDetails.email2}</a>
              </div>
            }
            />
          
        </MotionItem>

        {/* Address (Google Maps click) */}
        <MotionItem>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              contactDetails.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none"
          >
            <InfoCard
              icon={<FaMapMarkerAlt className="h-6 w-6 text-primary" />}
              title="Address"
              content={<p>{contactDetails.address}</p>}
            />
          </a>
        </MotionItem>

        {/* LinkedIn */}
        <MotionItem>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none"
          >
            <InfoCard
              icon={<FaLinkedinIn className="h-6 w-6 text-primary" />}
              title="LinkedIn"
              content={<p>Follow us on LinkedIn</p>}
            />
          </a>
        </MotionItem>

        {/* Instagram */}
        <MotionItem>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none"
          >
            <InfoCard
              icon={<FaInstagram className="h-6 w-6 text-primary" />}
              title="Instagram"
              content={
                <p>
                  Follow us on Instagram
                </p>
              }
            />
          </a>
        </MotionItem>

      </MotionGrid>
    </div>
  );
}
