
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Courses from "@/components/home/Courses";
import Internships from "@/components/home/Internships";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <About />
      <WhyChooseUs />
      <Courses />
      <Internships />
      <CallToAction />
    </div>
  );
}
