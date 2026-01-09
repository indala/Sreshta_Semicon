
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Cpu, CircuitBoard, Code, CheckSquare, Layers } from "lucide-react";

const focusAreas = [
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "VLSI Design Verification",
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
    title: "VLSI Physical Design",
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

export default function FocusAreas() {
  return (
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
                  <h3 className="text-xl font-bold font-headline font-bold text-black/70">{area.title}</h3>
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
                        <p className=" text-foreground font-bold">{topic.name}</p>
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
  );
}
