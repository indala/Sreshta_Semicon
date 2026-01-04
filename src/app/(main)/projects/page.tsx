
import Header from "@/components/projects/Header";
import Projects from "@/components/projects/Projects";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Showcase of real-world projects in Design Verification, Physical Design, and FPGA development completed by our students.',
};

export default function ProjectsPage() {
  return (
    <div>
      <Header />
      <section className="py-16 md:py-24">
        <Projects />
      </section>
    </div>
  );
}
