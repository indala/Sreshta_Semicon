import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BrainCircuit, CheckCircle, Mail, Phone, Rocket, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/lib/constants";

const whyChooseUs = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Industry-Aligned Curriculum",
    description: "Our courses are designed in collaboration with industry experts to meet current market demands.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Tool-Based Practical Training",
    description: "Gain hands-on experience with the latest VLSI tools and technologies used by top companies.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Real-Time Projects",
    description: "Work on real-world projects that provide practical exposure and build a strong portfolio.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Placement & Interview Support",
    description: "We provide dedicated support for resume building, interview preparation, and job placements.",
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-gradient-to-r from-red-900 to-red-800">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7A0C0C] to-[#4D0A0A] opacity-90"></div>
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight text-white drop-shadow-lg">
            Brains Behind the Chip
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto text-gray-200 drop-shadow-md">
            Your Closest Access to Semiconductor Excellence
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg" className="font-bold">
              <Link href="/register">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Bridging Academia and Industry
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            SRESHTA SEMICON TECHNOLOGIES PVT LTD is dedicated to acting as an intellectual bridge between universities and the semiconductor industry. We provide world-class training in VLSI and software to nurture industry-ready graduates.
          </p>
          <Button asChild variant="link" className="text-lg text-primary font-bold">
            <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
            Why Choose SRESHTA SEMICON?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-headline text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
            Our Core Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.title} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-primary">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-6">{course.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link href={course.link}>View Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Highlights */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Practical Internship Programs
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            We offer 4-week and 12-week internship programs available online, offline, or in a hybrid model, all designed to provide deep practical exposure to the semiconductor industry.
          </p>
          <Button asChild size="lg">
            <Link href="/internships">Explore Internships</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
            Ready to Start Your Career in VLSI?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-200">
            Contact us today to learn more about our courses and how we can help you achieve your career goals.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg font-semibold">
            <a href="tel:7801009777" className="flex items-center gap-2 hover:underline">
              <Phone className="h-5 w-5" /> 7801009777
            </a>
            <a href="mailto:sreshtasemicon@gmail.com" className="flex items-center gap-2 hover:underline">
              <Mail className="h-5 w-5" /> sreshtasemicon@gmail.com
            </a>
          </div>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/register">Register for a Course</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}