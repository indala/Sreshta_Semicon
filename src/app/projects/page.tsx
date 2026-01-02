import { PageHeader } from "@/components/common/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Cpu, CircuitBoard, Code } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Showcase of real-world projects in Design Verification, Physical Design, and FPGA development completed by our students.',
};

const projects = {
  verification: [
    "AXI, UART, SPI, I2C, PCIe Protocol Verification",
    "UVM-based Testbench for a RISC-V Processor",
    "Developing Reusable Verification IP (VIP)",
    "Implementing Scoreboards & Functional Coverage Models",
  ],
  physical: [
    "Clock Tree Optimization for a High-Speed SoC",
    "Power & Signal Integrity Analysis and Fixes",
    "Advanced Routing for Congestion and Timing Closure",
    "ECO (Engineering Change Order) Implementation and Optimization",
  ],
  fpga: [
    "Real-time Digital Video Processing System",
    "Implementation of Communication Protocols on Hardware",
    "FPGA-based Control Systems for Robotics",
    "Custom SoC design with a soft-core processor",
  ]
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Student Projects"
        description="Demonstrating real-world exposure and practical skills through industry-aligned projects."
        imageId="projects-header"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="verification" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-12">
              <TabsTrigger value="verification" className="py-2.5 text-base">
                <Cpu className="mr-2 h-5 w-5" /> Design Verification
              </TabsTrigger>
              <TabsTrigger value="physical" className="py-2.5 text-base">
                <CircuitBoard className="mr-2 h-5 w-5" /> Physical Design
              </TabsTrigger>
              <TabsTrigger value="fpga" className="py-2.5 text-base">
                <Code className="mr-2 h-5 w-5" /> FPGA Projects
              </TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <TabsContent value="verification">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.verification.map((project, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 shrink-0" />
                      <p className="font-medium text-foreground">{project}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="physical">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.physical.map((project, index) => (
                     <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 shrink-0" />
                      <p className="font-medium text-foreground">{project}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="fpga">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.fpga.map((project, index) => (
                     <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 shrink-0" />
                      <p className="font-medium text-foreground">{project}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
}