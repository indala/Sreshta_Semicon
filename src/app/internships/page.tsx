import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Cpu, CircuitBoard } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internships | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Explore our Design Verification and Physical Design internships. Gain hands-on experience with our 4-week and 12-week programs.',
};

const internships = [
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: "Design Verification Internship",
    description: "Dive deep into the world of frontend verification, learning to build robust testbenches and verify complex designs.",
    programs: [
      {
        duration: "4-Week Fundamentals",
        focus: "Covers the essentials of SystemVerilog and basic testbench development."
      },
      {
        duration: "12-Week Advanced Flow",
        focus: "A comprehensive program on UVM, coverage closure, and mini industry-aligned projects."
      }
    ]
  },
  {
    icon: <CircuitBoard className="w-10 h-10 text-primary" />,
    title: "Physical Design Internship",
    description: "Understand the complete backend flow, from netlist to GDSII, with hands-on labs and projects.",
    programs: [
      {
        duration: "4-Week Backend Basics",
        focus: "Introduction to physical design concepts, tools, and basic flow."
      },
      {
        duration: "12-Week Advanced Implementation",
        focus: "In-depth training on timing closure, physical verification, and creating portfolio-ready projects."
      }
    ]
  },
];

export default function InternshipsPage() {
  return (
    <div>
      <PageHeader
        title="Internship Programs"
        description="Gain practical, industry-aligned experience with our structured internship pathways."
        imageId="internships-header"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <Card key={index} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                     <div className="bg-primary/10 p-3 rounded-lg">
                        {internship.icon}
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-headline">{internship.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{internship.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-6">
                  {internship.programs.map((program, i) => (
                    <div key={i} className="p-4 rounded-lg bg-background">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <h4 className="font-bold text-lg text-foreground">{program.duration}</h4>
                      </div>
                      <p className="text-muted-foreground ml-8">{program.focus}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href="/register">Register for Internship <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Ready to Launch Your Career?</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">
                Our internships are the perfect launchpad for a successful career in the semiconductor industry. Apply now to secure your spot.
            </p>
            <Button size="lg" asChild>
                <Link href="/contact">Contact Admissions</Link>
            </Button>
          </div>
      </section>
    </div>
  );
}