
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Briefcase, GraduationCap, Laptop, Zap, FolderKanban } from "lucide-react";
import type { Metadata } from 'next';
import { MotionSection } from "@/components/common/MotionSection";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";

export const metadata: Metadata = {
  title: 'Courses & Programs | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Explore our comprehensive VLSI training programs, internships, corporate training, and project assistance designed to build a successful career in the semiconductor industry.',
};

const programs = [
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: "Job-Ready VLSI Training Pathway",
    description: "Become job-ready with tool-based, hands-on learning.",
    features: [
      "Structured Course Curriculum",
      "Industry Tool Access, Live code debugging",
      "Industrial Projects & Protocols",
      "Placements & Mock Interviews"
    ]
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-primary" />,
    title: "Project-Based Internship Program",
    description: "Work on real designs under mentor guidance.",
    features: [
      "Specializations in Design Verification & Physical Design",
      "Deep-dive into hands-on, tool-based learning",
      "Work on mini-projects mirroring industry tasks",
      "Build a strong portfolio for your career"
    ]
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Skill-Boost Workshops",
    description: "Quick skill-upgrade sessions on industry tools and concepts.",
    features: [
      "Tailored curriculum to meet specific client needs",
      "Focus on client and interview readiness",
      "Flexible delivery: Onsite, Online, or Hybrid",
      "Stay ahead with the latest tools and methodologies"
    ]
  },
  {
    icon: <FolderKanban className="w-10 h-10 text-primary" />,
    title: "Industry Level Projects",
    description: "Implement end-to-end projects using real protocols.",
    features: [
      "Guidance on final-year academic support",
      "Complete tool setup and debugging assistance",
      "Help with documentation and viva preparation",
      "Turn your academic project into a valuable asset"
    ]
  },
];

export default function CoursesPage() {
  return (
    <div>
      <PageHeader
        title="Courses & Programs"
        description="Structured learning pathways for every stage of your semiconductor career."
        imageId="courses-header"
      />

      <MotionSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <MotionGrid className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <MotionItem key={index}>
                <Card className="flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        {program.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-headline">{program.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{program.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-3 mt-1 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </MotionItem>
            ))}
          </MotionGrid>
        </div>
      </MotionSection>
    </div>
  );
}