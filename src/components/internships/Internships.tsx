
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Cpu, CircuitBoard } from "lucide-react";
import Link from "next/link";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";
import { AnimatedIcon } from "@/components/common/AnimatedIcon";


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
    ],
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
    ],
  },
  {
    icon: <CircuitBoard className="w-10 h-10 text-primary" />,
    title: "VLSI DFT – DESIGN FOR TESTABILITY",
    fourWeek: [
      "Basics of VLSI testing & DFT necessity",
      "Fault models (stuck-at, transition – overview)",
      "Scan concepts & scan chain fundamentals",
      "Introduction to ATPG and test patterns",
      "Hands-on with basic DFT insertion flow",
      "Understanding industry DFT terminology & workflows",
    ],
    twelveWeek: [
      "Complete DFT flow: RTL → Scan → ATPG → Signoff",
      "Scan architecture & scan compression concepts",
      "ATPG pattern generation & fault coverage analysis",
      "Basics of MBIST & LBIST",
      "Tool-based labs with real DFT scenarios",
      "Mini-project focused on DFT readiness & test closure",
    ],
  },
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: "VLSI FPGA – DESIGN & IMPLEMENTATION",
    fourWeek: [
      "FPGA architecture & design fundamentals",
      "Verilog/SystemVerilog for FPGA design",
      "RTL design, synthesis & simulation basics",
      "Introduction to FPGA tool flow (Vivado/Quartus)",
      "Simple FPGA projects & board-level concepts",
      "Understanding FPGA-based industry workflows",
    ],
    twelveWeek: [
      "Complete FPGA design flow: RTL → Synthesis → P&R → Bitstream",
      "Timing constraints & timing analysis on FPGA",
      "Interface protocols (UART, SPI, I2C – basics)",
      "On-chip debugging (ILA, SignalTap concepts)",
      "Hardware implementation on FPGA boards",
      "Mini-project focused on real-time FPGA application design",
    ],
  },
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: "EMBEDDED SYSTEMS",
    fourWeek: [
      "Embedded systems fundamentals & architecture",
      "Basics of C programming for embedded systems",
      "Microcontroller overview (ARM/AVR/ESP – basics)",
      "GPIO, timers, interrupts & peripherals",
      "Simple embedded applications & debugging",
      "Understanding embedded development workflows",
    ],
    twelveWeek: [
      "Embedded system design with microcontrollers",
      "Peripheral interfacing (UART, SPI, I2C, ADC, PWM)",
      "Real-time concepts & basics of RTOS",
      "Firmware development, debugging & optimization",
      "Tool-based labs with hardware interfacing",
      "Mini-project focused on real-world embedded applications",
    ],
  },
  {
    icon: <CircuitBoard className="w-10 h-10 text-primary" />,
    title: "IOT – INTERNET OF THINGS",
    fourWeek: [
      "Fundamentals of IoT & system architecture",
      "Sensors, actuators & microcontroller basics",
      "Introduction to communication protocols (Wi-Fi, BLE)",
      "Basics of cloud & data visualization",
      "Simple IoT use-case implementation",
      "Understanding IoT industry workflows",
    ],
    twelveWeek: [
      "Complete IoT system design: Device → Cloud → Application",
      "Communication protocols (MQTT, HTTP, REST APIs)",
      "Cloud platforms & data dashboards",
      "Security basics in IoT systems",
      "End-to-end IoT application development",
      "Mini-project aligned with real-world IoT use cases",
    ],
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
            <Card className="border-3 border-red-600 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full ">


              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <AnimatedIcon>{internship.icon}</AnimatedIcon>
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-headline pt-4">{internship.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg shadow-lg hover:shadow-xl bg-background">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h4 className="font-bold text-lg text-foreground">4-Week Internship</h4>
                    </div>
                    <ul className="space-y-2 pl-5 list-disc ">
                      {internship.fourWeek.map((item, i) => (
                        <li className="text-dark/90 text-semibold" key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg shadow-lg hover:shadow-xl bg-background">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h4 className="font-bold text-lg text-foreground">12-Week Internship</h4>
                    </div>
                    <ul className="space-y-2 pl-5 list-disc ">
                      {internship.twelveWeek.map((item, i) => (
                        <li className="text-dark/90 text-bold" key={i}>{item}</li>
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
