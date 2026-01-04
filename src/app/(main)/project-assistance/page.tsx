
import Header from "@/components/project-assistance/Header";
import Services from "@/components/project-assistance/Services";
import CTA from "@/components/project-assistance/CTA";
import { MotionSection } from "@/components/common/MotionSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Assistance | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Expert support for final-year academic students, from project topic selection and tool setup to documentation and viva preparation.',
};

export default function ProjectAssistancePage() {
  return (
    <div>
      <Header />
      <MotionSection className="py-16 md:py-24">
        <Services />
      </MotionSection>
      <MotionSection className="py-16 md:py-24 bg-card">
        <CTA />
      </MotionSection>
    </div>
  );
}
