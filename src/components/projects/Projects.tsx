
import { CheckCircle, Cpu } from "lucide-react";

const industrialProjects = [
    "AXI4 Master/Slave Interface Design Verification using System Verilog.",
    "Synchronous FIFO - Coverage-Driven Verification with SV.",
    "UART Tx/Rx Communication Subsystem Verification using SV / UVM.",
    "SPI Master/Slave Protocol - Reusable Agent-Based UVM Verification.",
    "APB Bridge Design Verification using System Verilog OOP Testbench.",
    "Round-Robin Arbiter - RTL Design & Coverage-Driven Verification.",
    "I2C Serial Communication Protocol Verification using System Verilog Class-Based Testbench.",
    "RISC-V CSR & Register File Block Verification using System Verilog (Scoreboard & Coverage).",
    "PCIe Endpoint Verification SV Environment Development.",
    "Router 1*3 Design Verification using SV/ UVM Methodology",
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Cpu className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold font-headline text-primary">Design Verification Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {industrialProjects.map((project, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border hover:shadow-md transition-shadow">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 shrink-0" />
                    <p className="font-medium text-foreground">{project}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}
