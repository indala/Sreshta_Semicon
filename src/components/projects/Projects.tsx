
import { Cpu, CircuitBoard, Microchip, Network, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projectsData = {
    verification: {
        title: "Design Verification",
        icon: <Cpu className="h-5 w-5" />,
        projects: [
            {
                title: "AXI4 Master/Slave Interface Design Verification",
                description: "Verified AXI4 protocol compliance for master and slave interfaces using SystemVerilog. Developed constrained-random stimulus, assertions, and functional coverage for address, data, and response channels. Ensured correct burst handling, handshaking, and error responses.",
                tech: ["SystemVerilog", "AXI4", "Constraint-Random"]
            },
            {
                title: "Synchronous FIFO – Coverage-Driven Verification",
                description: "Verified a synchronous FIFO design using a coverage-driven SystemVerilog testbench. Checked data integrity, full/empty conditions, and pointer wrap-around scenarios. Achieved high functional coverage using constrained-random transactions.",
                tech: ["SystemVerilog", "FIFO", "Coverage-Driven"]
            },
            {
                title: "UART Tx/Rx Communication Subsystem Verification",
                description: "Verified UART transmitter and receiver functionality using SV/UVM methodology. Tested baud rate generation, start/stop bits, parity, and error detection. Used scoreboards and coverage to validate reliable serial communication.",
                tech: ["SV/UVM", "UART", "Scoreboards"]
            },
            {
                title: "SPI Master/Slave Protocol – Reusable Agent-Based UVM Verification",
                description: "Developed a reusable UVM agent for SPI master and slave protocol verification. Verified clock polarity/phase modes, data transfer, and chip select behavior. Ensured protocol compliance using monitors, scoreboards, and functional coverage.",
                tech: ["UVM", "SPI", "Reusable Agents"]
            },
            {
                title: "APB Bridge Design Verification using SV OOP Testbench",
                description: "Verified an APB bridge using an object-oriented SystemVerilog testbench. Validated address decoding, read/write transfers, and wait-state handling. Ensured protocol timing correctness through assertions and functional coverage.",
                tech: ["SystemVerilog OOP", "APB", "Assertions"]
            },
            {
                title: "Round-Robin Arbiter – RTL Design & Verification",
                description: "Designed and verified a round-robin arbiter RTL to ensure fair request servicing. Verified grant rotation, priority logic, and corner cases using constrained-random testing. Achieved coverage closure for all arbitration scenarios.",
                tech: ["RTL Design", "SystemVerilog", "Arbiter"]
            },
            {
                title: "I2C Serial Communication Protocol Verification",
                description: "Verified I2C protocol functionality using a class-based SystemVerilog testbench. Tested start/stop conditions, ACK/NACK handling, and multi-byte transfers. Ensured correct timing and bus arbitration behavior.",
                tech: ["SystemVerilog", "I2C", "Class-Based TB"]
            },
            {
                title: "RISC-V CSR & Register File Block Verification",
                description: "Verified RISC-V CSR and register file blocks using SystemVerilog scoreboards and functional coverage. Validated read/write access, privilege checks, and reset behavior. Ensured architectural compliance with RISC-V specifications.",
                tech: ["RISC-V", "CSR", "Functional Coverage"]
            },
            {
                title: "PCIe Endpoint Verification – SV Environment Development",
                description: "Developed a SystemVerilog verification environment for a PCIe endpoint. Verified link initialization, transaction layer packets, and configuration space accesses. Used assertions and coverage to validate protocol correctness.",
                tech: ["SystemVerilog", "PCIe", "Link Init"]
            },
            {
                title: "Router 1×3 Design Verification using SV/UVM",
                description: "Verified a 1×3 router design using UVM methodology. Tested packet routing, arbitration, and congestion scenarios with constrained-random traffic. Ensured correct data delivery using scoreboards and functional coverage.",
                tech: ["UVM", "Router", "Congestion Testing"]
            }
        ]
    },
    physical: {
        title: "Physical Design",
        icon: <CircuitBoard className="h-5 w-5" />,
        projects: [
            { title: "Dynamic Power Saving Through Smarter Clock Trees", description: "Focuses on reducing clock power by optimizing clock tree synthesis (CTS). Techniques like clock balancing, buffer minimization, and low-power cells are used." },
            { title: "Shielding Strategies for Superior Signal Integrity", description: "Critical signal nets are protected using shielding with power/ground lines. This reduces crosstalk noise, delay variation, and signal distortion." },
            { title: "Power Integrity Enhancement with Decoupling Caps", description: "Decoupling capacitors are strategically inserted to stabilize voltage fluctuations. This helps reduce IR drop and supply noise." },
            { title: "Clock Skew Reduction for Stable Timing", description: "Minimizes clock skew using optimized CTS techniques like buffer placement, clock path balancing, and useful skew." },
            { title: "Timing Optimization by Reducing Capacitance Load", description: "High-capacitance nets are optimized by resizing cells, buffering, and routing improvements for faster transitions." },
            { title: "Area-Optimized Physical Design", description: "Focuses on reducing chip area while maintaining timing closure through cell compaction and efficient placement." },
            { title: "Routing Optimization for Congestion Management", description: "Identifies and resolves routing congestion hotspots using layer reassignment, detours, and spacing adjustments." },
            { title: "Clock Gating Techniques for Lower Dynamic Power", description: "Clock gating cells are inserted to disable clocks for idle logic blocks, significantly reducing power consumption." },
            { title: "Floorplanning & Partitioning for Data Movement", description: "Strategic placement of logical blocks to reduce interconnect delay and minimize long wires and congestion." },
            { title: "High-Speed Routing with Layer Promotion & NDR", description: "Critical nets are routed on higher metal layers using Non-Default Rules (NDRs) to reduce resistance and crosstalk." },
            { title: "Placement Optimization for Timing Convergence", description: "Refined placement to reduce critical path lengths and improve timing slack using cell spreading and clustering." },
            { title: "ECO Insertion & Optimization for Late-Stage Fixes", description: "Engineering Change Orders (ECOs) applied to fix timing, power, or functional issues late in the flow with minimal changes." },
            { title: "High-Speed I/O Buffer Placement", description: "Buffer placement close to pads to reduce delay and signal distortion, ensuring reliable high-speed data transfer." },
            { title: "Multi-Vt Cell Optimization", description: "Using different threshold voltage (Vt) cells to achieve an optimal balance between power and performance." },
            { title: "Critical Path Analysis for Performance", description: "Identifying and optimizing the most timing-critical paths through cell upsizing, buffering, and routing enhancements." }
        ]
    },
    fpga: {
        title: "FPGA Design",
        icon: <Microchip className="h-5 w-5" />,
        projects: [
            { title: "High-Accuracy Real-Time Clock with BCD Display", description: "Implemented a real-time clock with precise timekeeping and BCD format display for 7-segment interfaces, including an alarm feature." },
            { title: "16-Channel PWM Generator", description: "Designed for RGB LEDs and servo control with independent duty cycles, supporting high resolution and stable outputs." },
            { title: "Real-Time Digital Clock (HH:MM:SS)", description: "Accurate timekeeping using counters and comparators, ensuring reliable rollover and display updates." },
            { title: "Traffic Light Controller with Pedestrian Crossing", description: "FSM-based control for traffic signals and pedestrian indicators with emergency and manual override options." },
            { title: "PWM Generator for DC Motor Speed Control", description: "Controls motor speed through duty cycle adjustment, providing smooth transitions and stable operation." },
            { title: "8-bit Arithmetic Logic Unit (ALU)", description: "Performs arithmetic and logical operations with opcode selection and status flag generation (carry, zero)." },
            { title: "UART Serial Communication (TX + RX)", description: "Implemented UART modules with configurable baud rates and reliable data framing/error detection." },
            { title: "UART Bridge with FIFO + PC Software", description: "Hardware-software co-design using Python/Tera Term for data visualization and control with FIFO buffering." },
            { title: "On-Chip Logic Analyzer using ILA & VIO", description: "Integrated debugging cores for real-time internal signal monitoring without external probes." },
            { title: "Digital Oscilloscope", description: "Implemented waveform capture, sampling, buffering, and triggering for signal visualization and analysis." },
            { title: "SPI-Based ADC Interface", description: "Managed clock generation, data sampling, and conversion timing for external ADC synchronization." },
            { title: "I2C Temperature Sensor Interface", description: "Master controller handling start/stop conditions, addressing, and data reads for real-time monitoring." }
        ]
    },
    iot: {
        title: "IOT & Embedded",
        icon: <Network className="h-5 w-5" />,
        projects: [
            { title: "Battery Powered Heating and Cooling Suit", description: "Wearable suit with integrated thermal regulation using a microcontroller and battery optimization." },
            { title: "SMS-Based Home Automation", description: "GSM-controlled appliances with decoded SMS commands for secure and convenient remote control." },
            { title: "Wireless Heart Rate Measurement Device", description: "Health monitoring system that captures pulse signals and transmits data wirelessly to a monitoring unit." },
            { title: "Automated Vehicle Ventilation System", description: "Monitors temperature and gas levels inside vehicles to trigger automatic ventilation for passenger safety." },
            { title: "Sun Tracking for Photovoltaic Panels", description: "Microcontroller-driven orientation adjustment to maximize solar energy capture efficiency." },
            { title: "Surveillance Drone", description: "Embedded flight controller with camera integration and wireless live video streaming for security." },
            { title: "Wireless River Bot", description: "Robotic system for environmental data collection and wireless transmission in water-based explored areas." },
            { title: "Coal Mine Intelligent Monitoring", description: "Real-time tracking of airflow, gas, and temperature to enhance safety in hazardous environments." },
            { title: "GSM-Based Automatic Energy Meter Reading", description: "Automated billing and consumption tracking using GSM to reduce manual reading errors." },
            { title: "Remote ECG and Temperature Monitoring", description: "Continuous patient health data collection and wireless transmission for medical professional access." },
            { title: "Voice-Customizable Text-To-Speech", description: "Intelligent home-care assistant for elderly users with adjustable voice parameters for alerts." },
            { title: "Robust Tri-Modal Speech Recognition", description: "Combines audio, visual, and contextual inputs for high accuracy in noisy consumer environments." },
            { title: "Accident Alert and Vehicle Tracking", description: "ARM7-based system using GPS/GSM to automate emergency alerts and location sharing." },
            { title: "Intelligent Ambulance Traffic Control", description: "Raspberry Pi system to prioritize emergency vehicle movement through traffic signals." },
            { title: "Real-Time Object Recognition", description: "Computer vision algorithms running on Raspberry Pi for security and automation applications." },
            { title: "Blind Assistance Currency Detection", description: "Camera-based note identification with audio feedback for visually impaired independence." },
            { title: "Gas Leakage Detection via ZigBee", description: "Low-power sensor network for industrial safety with remote monitoring and alerts." },
            { title: "Bus Alert System for Visually Impaired", description: "Wireless communication for audio alerts on bus arrivals to improve public transport accessibility." },
            { title: "AI Bot for Harmful Gas Monitoring", description: "Wireless sensor network with predictive analytics for industrial gas safety monitoring." },
            { title: "IoT-Enabled Smart Farming", description: "Soil and environmental monitoring with automated irrigation to improve resource efficiency." },
            { title: "Cloud-Based Farm Monitoring & Automation", description: "Centralized data collection and cloud-based control for optimized crop management." }
        ]
    }
};

export default function Projects() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-headline text-primary mb-4">Innovation Portfolio</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Showcasing our expertise across VLSI design, verification, and embedded systems engineering.
                </p>
            </div>

            <Tabs defaultValue="verification" className="w-full">
                <div className="flex justify-center mb-12">
                    <TabsList className="bg-muted/50 p-1">
                        {Object.entries(projectsData).map(([key, category]) => (
                            <TabsTrigger key={key} value={key} className="flex items-center gap-2 px-6">
                                {category.icon}
                                <span className="hidden sm:inline">{category.title}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {Object.entries(projectsData).map(([key, category]) => (
                    <TabsContent key={key} value={key}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.projects.map((project, idx) => (
                                <Card key={idx} className="group border-2 border-red-700 hover:border-primary/50 transition-all duration-300 dark:bg-zinc-900/50 backdrop-blur-sm">
                                    <CardHeader className="space-y-1">
                                        <div className="flex items-start justify-between">
                                            <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                                {project.title}
                                            </CardTitle>
                                        </div>
                                        {("tech" in project) && (
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {project.tech?.map((t) => (
                                                    <Badge key={t} variant="secondary" className="text-[10px] uppercase tracking-wider font-bold">
                                                        {t}
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-2lg text-justify  leading-relaxed text-black/100">
                                            {project.description}
                                        </CardDescription>
                                        <div className="flex  items-center gap-2 mt-4 text-primary  group-hover:opacity-100 transition-opacity">
                                            <CheckCircle2 className="h-4 w-4" />
                                            <span className="text-xs font-semibold uppercase tracking-tighter">Verified Implementation</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
