
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Binary, PenTool } from "lucide-react";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";
import { AnimatedIcon } from "@/components/common/AnimatedIcon";

const prerequisites = [
  {
    icon: <Binary className="h-8 w-8 text-white" />,
    title: "Digital Electronics",
    description: "Deep understanding of Digital Electronics as the backbone of VLSI, ensuring accurate logic implementation, scalable architectures, and high-performance silicon solutions.",
  },
  {
    icon: <Terminal className="h-8 w-8 text-white" />,
    title: "Linux Operating System",
    description: "Expertise in leveraging Linux for scalable simulations, synthesis runs, and verification automation—ensuring faster turnaround and enhanced design efficiency.",
  },
  {
    icon: <PenTool className="h-8 w-8 text-white" />,
    title: "TCL Scripting Language",
    description: "Expertise in integrating TCL-driven automation to minimize manual effort, boost design productivity, and ensure consistent, high-quality chip results.",
  },
];

export default function Prerequisites() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
        Prerequisites? We Cover Everything!
      </h2>
      <MotionGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prerequisites.map((prerequisite, index) => (


          <MotionItem key={index}>
            <Card className="text-center bg-gradient-to-br from-red-600 via-red-800 to-[#781511] text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
              <CardHeader>
                <div className="mx-auto rounded-full p-3 w-fit mb-4">
                  <AnimatedIcon>{prerequisite.icon}</AnimatedIcon>
                </div>
                <CardTitle className="text-xl font-headline text-white">{prerequisite.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#CFCFCF]">{prerequisite.description}</p>
              </CardContent>
            </Card>
          </MotionItem>
        ))}
      </MotionGrid>
    </div>
  );
}
