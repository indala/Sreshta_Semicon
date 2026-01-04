
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Binary, PenTool } from "lucide-react";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";

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

export default function Prerequisites() {
  return (
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
  );
}
