
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Goal } from "lucide-react";
import { MotionSection } from "@/components/common/MotionSection";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";
import { AnimatedIcon } from "@/components/common/AnimatedIcon";

const values = [
  {
    icon: <Award className="h-8 w-8 text-white" />,
    title: "Quality Education",
    description: "We are committed to providing the highest quality education with a focus on practical, hands-on learning."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-white" />,
    title: "Industry Relevance",
    description: "Our curriculum is continuously updated to stay relevant with the latest industry trends and technologies."
  },
  {
    icon: <Goal className="h-8 w-8 text-white" />,
    title: "Ethical Training Practices",
    description: "We uphold the highest standards of integrity and ethics in all our training programs and interactions."
  }
];

export default function Values() {
  return (
    <MotionSection className="bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700   py-16 md:py-24 bg-card">
      <div className=" container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Our Core Values
        </h2>
        <MotionGrid className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <MotionItem key={index}>
              <Card className="bg-gradient-to-br from-red-600 via-red-800 to-[#781511] text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <AnimatedIcon>{value.icon}</AnimatedIcon>
                  <CardTitle className="text-xl font-bold text-white font-headline">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#CFCFCF] text-justify font-semibold">{value.description}</p>
                </CardContent>
              </Card>
            </MotionItem>
          ))}
        </MotionGrid>
      </div>
    </MotionSection>
  );
}
