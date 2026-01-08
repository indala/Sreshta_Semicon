'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, CheckCircle, Rocket, Target } from "lucide-react";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";
import { AnimatedIcon } from "@/components/common/AnimatedIcon";

const whyChooseUs = [
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: "Industry-Aligned Curriculum",
    description: "Our courses are designed in collaboration with industry experts to meet current market demands.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-white" />,
    title: "Tool-Based Practical Training",
    description: "Gain hands-on experience with the latest VLSI tools and technologies used by top companies.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-white" />,
    title: "Real-Time Projects",
    description: "Work on real-world projects that provide practical exposure and build a strong portfolio.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: "Placement & Interview Support",
    description: "We provide dedicated support for resume building, interview preparation, and job placements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Why Choose SRESHTA SEMICON?
        </h2>
        <MotionGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <MotionItem key={index}>
              <Card className="bg-gradient-to-br from-red-600 via-red-800 to-[#781511] text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                    <AnimatedIcon>{item.icon}</AnimatedIcon>
                  <CardTitle className="text-xl font-bold text-white font-headline">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#CFCFCF] text-justify">{item.description}</p>
                </CardContent>
              </Card>
            </MotionItem>
          ))}
        </MotionGrid>
      </div>
    </section>
  );
}
