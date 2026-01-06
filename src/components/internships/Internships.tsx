
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Cpu, CircuitBoard } from "lucide-react";
import Link from "next/link";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";

const internships = [
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: "DESIGN VERIFICATION - FRONTEND",
    fourWeek: [
        "Fundamentals of Verification & testbench architecture",
        "Basics of Verilog/SystemVerilog",
        "Introduction to simulation & debugging",
        "Hands-on with simple testcases and environments",
        "Understanding verification workflows used in industry",
    ],
    twelveWeek: [
        "Complete verification flow with SystemVerilog",
        "Constrained-random testing & functional coverage",
        "Assertions, debugging & waveform analysis",
        "Hands-on with advanced testbench components",
        "Mini-project aligned with industry DV practices",
    ]
  },
  {
    icon: <CircuitBoard className="w-10 h-10 text-primary" />,
    title: "PHYSICAL DESIGN - BACKEND",
    fourWeek: [
        "Basics of Physical Design flow",
        "Floorplanning, Placement & Routing overview",
        "Intro to CTS & Timing Closure",
        "Hands-on with beginner-level EDA tools",
        "Understanding industry workflows & terminology",
    ],
    twelveWeek: [
        "Complete PD flow with deeper module-level work",
        "Floorplanning → Placement → CTS → Routing → Signoff",
        "Timing analysis & basic optimization techniques",
        "Tool-based labs with real design scenarios",
        "Mini-project for portfolio/placement readiness",
    ]
  },
];

export default function Internships() {
  return (
    <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <p className="text-lg sm:text-2xl text-muted-foreground">
                Internships are provided in <strong>ONLINE | OFFLINE | HYBRID</strong> modes.
            </p>
        </div>
      <MotionGrid className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {internships.map((internship, index) => (
          <MotionItem key={index}>
            <Card className="flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
              <CardHeader>
                <div className="flex items-start gap-4">
                   <div className="bg-primary/10 p-3 rounded-lg">
                      {internship.icon}
                  </div>
                  <div>
                      <CardTitle className="text-2xl font-headline pt-4">{internship.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 rounded-lg bg-background">
                          <div className="flex items-center gap-3 mb-2">
                              <Calendar className="h-5 w-5 text-primary" />
                              <h4 className="font-bold text-lg text-foreground">4-Week Internship</h4>
                          </div>
                          <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                              {internship.fourWeek.map((item, i) => (
                              <li key={i}>{item}</li>
                              ))}
                          </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-background">
                          <div className="flex items-center gap-3 mb-2">
                              <Calendar className="h-5 w-5 text-primary" />
                              <h4 className="font-bold text-lg text-foreground">12-Week Internship</h4>
                          </div>
                          <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                              {internship.twelveWeek.map((item, i) => (
                              <li key={i}>{item}</li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </CardContent>
              <CardFooter>
                  <Button asChild className="w-full">
                      <Link href="/register">Register for Internship <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
              </CardFooter>
            </Card>
          </MotionItem>
        ))}
      </MotionGrid>
    </div>
  );
}
