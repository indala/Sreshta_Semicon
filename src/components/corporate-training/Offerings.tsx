
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, RefreshCw, Laptop } from "lucide-react";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";

const offerings = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Customized Training Approach",
        description: "We design and deliver training modules tailored to your organization's specific needs and project requirements."
    },
    {
        icon: <RefreshCw className="h-8 w-8 text-primary" />,
        title: "Tool-Based Refreshers",
        description: "Our refresher courses help your teams get up to speed with the latest versions of industry-standard tools and methodologies."
    },
    {
        icon: <Check className="h-8 w-8 text-primary" />,
        title: "Client Interview Preparation",
        description: "We offer specialized programs to prepare your employees for critical client interviews, ensuring they showcase their skills effectively."
    },
    {
        icon: <Laptop className="h-8 w-8 text-primary" />,
        title: "Flexible Delivery Modes",
        description: "Choose from onsite, online, or hybrid delivery models to suit your team's location and schedule, minimizing disruption."
    }
];

export default function Offerings() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Empowering Your Team for Success
        </h2>
        <p className="text-lg">
          Sreshta is a preferred choice for corporate training because we deliver customized, tool-based, and flexible learning solutions. Our programs prepare working professionals for client interviews and challenging projects, helping them drive innovation and achieve their full potential. We provide a complete ecosystem for skill enhancement, including tailored refreshers, interview coaching, and versatile delivery modes to fit any organization’s needs.
        </p>
      </div>

      <MotionGrid className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {offerings.map((offering, index) => (
          <MotionItem key={index}>
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  {offering.icon}
                </div>
                <CardTitle className="text-xl text-red-900  font-headline  font-bold">{offering.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[1.1rem]">{offering.description}</p>
              </CardContent>
            </Card>
          </MotionItem>
        ))}
      </MotionGrid>
    </div>
  );
}
