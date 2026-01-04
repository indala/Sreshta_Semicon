
import Header from "@/components/corporate-training/Header";
import Offerings from "@/components/corporate-training/Offerings";
import Partner from "@/components/corporate-training/Partner";
import { MotionSection } from "@/components/common/MotionSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Training | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Customized VLSI training solutions for working professionals and organizations to enhance skills and prepare for client interviews.',
};

export default function CorporateTrainingPage() {
  return (
    <div>
      <Header />
      <MotionSection className="py-16 md:py-24">
        <Offerings />
      </MotionSection>
      <MotionSection className="py-16 md:py-24 bg-card">
        <Partner />
      </MotionSection>
    </div>
  );
}
