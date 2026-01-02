
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, RefreshCw, Laptop } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Training | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Customized VLSI training solutions for working professionals and organizations to enhance skills and prepare for client interviews.',
};

const offerings = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Customized Training Approach",
        description: "We design and deliver training modules tailored to your organization's specific needs and project requirements."
    },
    {
        icon: <RefreshCw className="h-8 w-8 text-primary" />,
        title: "Tool-Based Refreshers",
        description: "Our refresher courses help your teams get up to speed with the latest versions of industry-standard tools and methodologies."
    },
    {
        icon: <Check className="h-8 w-8 text-primary" />,
        title: "Client Interview Preparation",
        description: "We offer specialized programs to prepare your employees for critical client interviews, ensuring they showcase their skills effectively."
    },
    {
        icon: <Laptop className="h-8 w-8 text-primary" />,
        title: "Flexible Delivery Modes",
        description: "Choose from onsite, online, or hybrid delivery models to suit your team's location and schedule, minimizing disruption."
    }
];

export default function CorporateTrainingPage() {
  return (
    <div>
      <PageHeader
        title="Corporate Training"
        description="Upskill your workforce with our tailored VLSI training solutions."
        imageId="corporate-header"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Empowering Your Team for Success
            </h2>
            <p className="text-lg">
              Sreshta is a preferred choice for corporate training because we deliver customized, tool-based, and flexible learning solutions. Our programs prepare working professionals for client interviews and challenging projects, helping them drive innovation and achieve their full potential. We provide a complete ecosystem for skill enhancement, including tailored refreshers, interview coaching, and versatile delivery modes to fit any organization’s needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {offering.icon}
                  </div>
                  <CardTitle className="text-xl font-headline text-foreground">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Partner with Us</h2>
            <p className="max-w-3xl mx-auto text-lg mb-8">
                Let&apos;s collaborate to create a training program that addresses your team&apos;s unique challenges and goals. Contact us for a consultation.
            </p>
            <Button size="lg" asChild>
                <Link href="/contact">Inquire Now</Link>
            </Button>
          </div>
      </section>
    </div>
  );
}