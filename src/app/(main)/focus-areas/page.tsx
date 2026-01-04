
import Header from "@/components/focus-areas/Header";
import FocusAreas from "@/components/focus-areas/FocusAreas";
import Prerequisites from "@/components/focus-areas/Prerequisites";
import { MotionSection } from "@/components/common/MotionSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Focus Areas | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Discover our deep technical specializations in VLSI Design Verification (Frontend), Physical Design (Backend), and FPGA Design & Development.',
};

export default function FocusAreasPage() {
  return (
    <div>
      <Header />
      <section className="py-16 md:py-24">
        <FocusAreas />
      </section>
      <MotionSection className="py-16 md:py-24 bg-card">
        <Prerequisites />
      </MotionSection>
    </div>
  );
}
