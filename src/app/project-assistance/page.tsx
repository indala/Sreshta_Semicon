import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Lightbulb, Wrench, MessageSquare, BookOpen } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Assistance | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Expert support for final-year academic students, from project topic selection and tool setup to documentation and viva preparation.',
};

const services = [
    {
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        title: "Project Topic Selection",
        description: "We help you choose a relevant and impactful project topic that aligns with current industry trends."
    },
    {
        icon: <Wrench className="h-8 w-8 text-primary" />,
        title: "Tool Environment Setup",
        description: "Get complete assistance with installing and configuring the necessary software and tools for your project."
    },
    {
        icon: <MessageSquare className="h-8 w-8 text-primary" />,
        title: "Continuous Mentoring",
        description: "Receive ongoing guidance and support from industry experts throughout your project lifecycle."
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-primary" />,
        title: "Debugging & Optimization",
        description: "Our mentors assist you in troubleshooting issues and optimizing your design for performance."
    },
    {
        icon: <BookOpen className="h-8 w-8 text-primary" />,
        title: "Documentation & Viva Support",
        description: "We provide expert help in preparing your project report and getting you ready for your final viva."
    },
];

export default function ProjectAssistancePage() {
  return (
    <div>
      <PageHeader
        title="Project Assistance"
        description="End-to-end support for your final-year academic projects."
        imageId="assistance-header"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Your Success is Our Goal
            </h2>
            <p className="text-lg">
              A final-year project is a critical milestone. At SRESHTA SEMICON, we provide comprehensive assistance to ensure your project is not just completed, but is a showcase of your skills and knowledge, preparing you for a successful career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-headline text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Get Expert Help Today</h2>
            <p className="max-w-3xl mx-auto text-lg mb-8">
                Don&apos;t let project challenges hold you back. Reach out to us to learn how our project assistance program can help you succeed.
            </p>
            <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
      </section>
    </div>
  );
}