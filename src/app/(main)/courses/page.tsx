
import Header from "@/components/courses/Header";
import HardwareCourses from "@/components/courses/HardwareCourses";
import SoftwareCourses from "@/components/courses/SoftwareCourses";
import { MotionSection } from "@/components/common/MotionSection";

export default function CoursesPage() {
  return (
    <div>
      <Header />
      <MotionSection className="container py-12">
        <HardwareCourses />
        <SoftwareCourses />
      </MotionSection>
    </div>
  );
}
