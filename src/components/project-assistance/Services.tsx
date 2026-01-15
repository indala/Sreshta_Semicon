
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Lightbulb, Wrench, MessageSquare, BookOpen } from "lucide-react";
import { AnimatedIcon } from "@/components/common/AnimatedIcon";
import {MotionGrid} from "@/components/common/MotionGrid";
import {MotionItem} from "@/components/common/MotionItem";
const services = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary hover:text-white  " />,
    title: "Project Topic Selection",
    description: "We help you choose a relevant and impactful project topic that aligns with current industry trends."
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary hover:text-white" />,
    title: "Tool Environment Setup",
    description: "Get complete assistance with installing and configuring the necessary software and tools for your project."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary hover:text-white" />,
    title: "Continuous Mentoring",
    description: "Receive ongoing guidance and support from industry experts throughout your project lifecycle."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary hover:text-white" />,
    title: "Debugging & Optimization",
    description: "Our mentors assist you in troubleshooting issues and optimizing your design for performance."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary hover:text-white" />,
    title: "Documentation & Viva Support",
    description: "We provide expert help in preparing your project report and getting you ready for your final viva."
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center p-10 sm:px-16   rounded-lg mx-auto mb-12 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Your Success is Our Goal
        </h2>
        <p className="text-xl text-white text-justify ">
          Sreshta offers end-to-end support for final-year academic students, ensuring their projects are industry-aligned and impactful. We guide students from project topic selection to tool setup, debugging, and documentation, helping them build a strong foundation for their careers. Our mentors work closely with students to ensure their projects are not just completed but are also valuable assets for placement.
        </p>
      </div>

      

     

      <MotionGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <MotionItem key={index}>
            <Card className="text-center border-2 border-red-700 hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4 hover:bg-red-900">
                  <AnimatedIcon>{service.icon}</AnimatedIcon>
                </div>
                <CardTitle className="text-xl font-headline text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          </MotionItem>
        ))}
      </MotionGrid>
    </div>
  );
}
