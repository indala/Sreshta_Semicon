
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Eye, Goal } from "lucide-react";
import type { Metadata } from 'next';
import { MotionSection } from "@/components/common/MotionSection";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";

export const metadata: Metadata = {
  title: 'About Us | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Learn about SRESHTA SEMICON TECHNOLOGIES PVT LTD, our vision, mission, and commitment to excellence in VLSI and semiconductor training.',
};

const values = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Quality Education",
    description: "We are committed to providing the highest quality education with a focus on practical, hands-on learning."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Industry Relevance",
    description: "Our curriculum is continuously updated to stay relevant with the latest industry trends and technologies."
  },
  {
    icon: <Goal className="h-8 w-8 text-primary" />,
    title: "Ethical Training Practices",
    description: "We uphold the highest standards of integrity and ethics in all our training programs and interactions."
  }
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About SRESHTA SEMICON"
        description="Pioneering excellence in semiconductor education and training."
        imageId="about-header"
      />

      <MotionSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <MotionSection delay={0.2} direction="right">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Our Company
              </h2>
              <p className="mb-4 text-lg">
                Sreshta Semicon Technologies Pvt Ltd is a leading VLSI institute in Visakhapatnam, dedicated to closing the gap between classroom learning and industry needs. We offer focused training, internships, and placement programs to equip engineering students with the skills required to thrive in the semiconductor sector.
              </p>
            </MotionSection>
            <div className="grid grid-cols-1 gap-8">
              <MotionSection delay={0.4} direction="left">
                <Card className="bg-primary/70 text-white hover:shadow-lg transition-all duration-300">
                  <CardHeader className="flex-row items-center gap-4">
                    <Eye className="h-10 w-10 text-gray-700" />
                    <CardTitle className="text-2xl font-headline m-0">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      The goal of SRESHTA is to serve as an intellectual bridge connecting highly developed, idealistic industries with a wealth of universities. We aim to establish a point of contact for VLSI & Software training through research and development, industry-focused education programs, and technological contributions.
                    </p>
                  </CardContent>
                </Card>
              </MotionSection>
              <MotionSection delay={0.6} direction="left">
                <Card className="bg-primary/70 text-white hover:shadow-lg transition-all duration-300">
                  <CardHeader className="flex-row items-center gap-4">
                    <Goal className="h-10 w-10 text-gray-700" />
                    <CardTitle className="text-2xl font-headline m-0">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      SRESHTA is committed to materialize its vision through its extensive training programs, seminars, internships, and workshops. We are dedicated to realizing its mission and exposing graduates and undergraduates to the industry.
                    </p>
                  </CardContent>
                </Card>
              </MotionSection>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
            Our Core Values
          </h2>
          <MotionGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <MotionItem key={index}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl font-headline text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{value.description}</p>
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
