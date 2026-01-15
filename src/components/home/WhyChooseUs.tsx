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
            <MotionItem
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group relative overflow-hidden bg-gradient-to-br from-red-600 via-red-800 to-[#781511] text-white border-none shadow-lg transition-all duration-500 hover:shadow-[0_20px_40px_rgba(220,38,38,0.25)] hover:-translate-y-3 h-full">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="flex flex-row items-center gap-4 relative z-10">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <AnimatedIcon>{item.icon}</AnimatedIcon>
                  </div>
                  <CardTitle className="text-xl font-bold text-white font-headline group-hover:text-red-200 transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-200 text-sm leading-relaxed text-justify group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </CardContent>

                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 group-hover:bg-red-400/50 transition-colors" />
              </Card>
            </MotionItem>
          ))}
        </MotionGrid>
      </div>
    </section>
  );
}
