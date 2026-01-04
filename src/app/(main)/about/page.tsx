
import Company from "@/components/about/Company";
import Header from "@/components/about/Header";
import Values from "@/components/about/Values";
import { MotionSection } from "@/components/common/MotionSection";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <MotionSection>
        <Company />
        <Values />
      </MotionSection>
    </div>
  );
}
