
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Goal } from "lucide-react";
import { MotionSection } from "@/components/common/MotionSection";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";

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
    <MotionSection className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Our Core Values
        </h2>
        <MotionGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <MotionItem key={index}>
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full bg-red-500 text-white">
                <CardHeader>
                  <div className="mx-auto bg-white/20 rounded-full p-3 w-fit mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-headline">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            </MotionItem>
          ))}
        </MotionGrid>
      </div>
    </MotionSection>
  );
}
