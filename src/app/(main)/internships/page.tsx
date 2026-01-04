
import Header from "@/components/internships/Header";
import Internships from "@/components/internships/Internships";
import CTA from "@/components/internships/CTA";
import { MotionSection } from "@/components/common/MotionSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internships | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Explore our Design Verification and Physical Design internships. Gain hands-on experience with our 4-week and 12-week programs.',
};

export default function InternshipsPage() {
  return (
    <div>
      <Header />
      <MotionSection className="py-16 md:py-24">
        <Internships />
      </MotionSection>
      <MotionSection className="py-16 md:py-24 bg-card">
        <CTA />
      </MotionSection>
    </div>
  );
}
