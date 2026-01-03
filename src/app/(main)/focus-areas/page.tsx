
import { PageHeader } from "@/components/common/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Cpu, CircuitBoard, Code, CheckSquare, Layers, Terminal, Binary, PenTool } from "lucide-react";
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionSection } from "@/components/common/MotionSection";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";

export const metadata: Metadata = {
  title: 'Focus Areas | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Discover our deep technical specializations in VLSI Design Verification (Frontend), Physical Design (Backend), and FPGA Design & Development.',
};

const focusAreas = [
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "VLSI Design Verification - ASIC Front-End",
    description: "Expertise in digital RTL implementation, verification simulations, and automated workflows using SystemVerilog, UVM and scripting languages.",
    topics: [
      {
        icon: <Code className="h-5 w-5 text-primary/80" />,
        name: "SystemVerilog & UVM",
        details: "Learn the industry-standard language and methodology for verification."
      },
      {
        icon: <CheckSquare className="h-5 w-5 text-primary/80" />,
        name: "Coverage-Driven Verification",
        details: "Ensure all aspects of the design are thoroughly tested."
      },
      {
        icon: <Layers className="h-5 w-5 text-primary/80" />,
        name: "Assertion-Based Verification",
        details: "Implement formal checks to catch bugs early in the design cycle."
      },
    ]
  },
  {
    icon: <CircuitBoard className="h-8 w-8 text-primary" />,
    title: "VLSI Physical Design - ASIC Back-End",
    description: "High-end proficiency in creating optimized chip layouts through strategic floorplanning, refined placement, balanced clock trees and efficient routing.",
    topics: [
      {
        icon: <Code className="h-5 w-5 text-primary/80" />,
        name: "Floorplanning to Signoff",
        details: "Understand the complete backend flow, from initial layout to final checks."
      },
      {
        icon: <CheckSquare className="h-5 w-5 text-primary/80" />,
        name: "CTS, STA, and Routing",
        details: "Master Clock Tree Synthesis, Static Timing Analysis, and routing techniques."
      },
      {
        icon: <Layers className="h-5 w-5 text-primary/80" />,
        name: "Physical Verification & Optimization",
        details: "Learn to optimize for power, timing, and area to meet performance goals."
      },
    ]
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "FPGA Design and Development",
    description: "Specialization in creating performance-driven FPGA solutions through efficient coding, timing optimization and resource-aware design strategies.",
    topics: [
      {
        icon: <Code className="h-5 w-5 text-primary/80" />,
        name: "RTL to Bitstream",
        details: "Follow the complete FPGA design flow, from writing code to programming the hardware."
      },
      {
        icon: <CheckSquare className="h-5 w-5 text-primary/80" />,
        name: "Tool Flows (Vivado / Quartus)",
        details: "Get hands-on experience with industry-leading FPGA development tools."
      },
      {
        icon: <Layers className="h-5 w-5 text-primary/80" />,
        name: "Communication Protocols",
        details: "Implement and test protocols like UART, SPI, and I2C on real hardware."
      },
    ]
  }
];

const prerequisites = [
    {
        icon: <Binary className="h-8 w-8 text-primary" />,
        title: "Digital Electronics",
        description: "Deep understanding of Digital Electronics as the backbone of VLSI, ensuring accurate logic implementation, scalable architectures, and high-performance silicon solutions.",
    },
    {
        icon: <Terminal className="h-8 w-8 text-primary" />,
        title: "Linux Operating System",
        description: "Expertise in leveraging Linux for scalable simulations, synthesis runs, and verification automation—ensuring faster turnaround and enhanced design efficiency.",
    },
    {
        icon: <PenTool className="h-8 w-8 text-primary" />,
        title: "TCL Scripting Language",
        description: "Expertise in integrating TCL-driven automation to minimize manual effort, boost design productivity, and ensure consistent, high-quality chip results.",
    },
];

export default function FocusAreasPage() {
  return (
    <div>
      <PageHeader
        title="Our Focus Areas"
        description="Deep-diving into the core specializations of the semiconductor industry."
        imageId="focus-header"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-6">
            {focusAreas.map((area, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="p-6 text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-headline text-primary">{area.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{area.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="border-t pt-4 mt-2">
                    <h4 className="font-semibold text-foreground mb-4">Key Topics:</h4>
                    <div className="space-y-4">
                      {area.topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-4 p-3 rounded-md bg-background">
                          <div className="text-primary">{topic.icon}</div>
                          <div>
                            <p className="font-semibold text-foreground">{topic.name}</p>
                            <p className="text-sm text-muted-foreground">{topic.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <MotionSection className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
            Prerequisites? We Cover Everything!
          </h2>
          <MotionGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prerequisites.map((prerequisite, index) => (
                <MotionItem key={index}>
                    <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                        <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                            {prerequisite.icon}
                        </div>
                        <CardTitle className="text-xl font-headline text-foreground">{prerequisite.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <p>{prerequisite.description}</p>
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
