'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionSection } from "@/components/common/MotionSection";
import { Eye, Goal } from "lucide-react";
import { Mulish } from "next/font/google";
import { AnimatedIcon } from "../common/AnimatedIcon";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mulish",
});

export default function Company() {
  return (
    <MotionSection className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionSection delay={0.2} direction="right">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 ">
              Our Company
            </h2>
            <p className="mb-4 text-lg">
              Sreshta Semicon Technologies Pvt Ltd is a leading VLSI institute in Visakhapatnam, dedicated to closing the gap between classroom learning and industry needs. We offer focused training, internships, and placement programs to equip engineering students with the skills required to thrive in the semiconductor sector.
            </p>
          </MotionSection>
          <div className="grid grid-cols-1 gap-8">
            <MotionSection delay={0.4} direction="left">
              <Card className=" bg-gradient-to-br from-red-600 via-red-800 to-[#781511] text-white hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex items-center gap-4 ">
                  <AnimatedIcon><Eye className="h-10 w-10 text-white" /></AnimatedIcon>
                  <CardTitle className="text-2xl text-white font-bold m-0 font-Times ">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#CFCFCF] text-justify ">
                    The goal of SRESHTA is to serve as an intellectual bridge connecting highly developed, idealistic industries with a wealth of universities. We aim to establish a point of contact for VLSI & Software training through research and development, industry-focused education programs, and technological contributions.
                  </p>
                </CardContent>
              </Card>
            </MotionSection>
            <MotionSection delay={0.6} direction="left">
              <Card className=" bg-gradient-to-br from-red-600 via-red-800 to-[#781511] text-white hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex items-center gap-4 ">
                  <AnimatedIcon><Goal className="h-10 w-10 text-white" /></AnimatedIcon>
                  <CardTitle className="text-2xl text-white font-bold m-0 font-Times ">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#CFCFCF] text-justify ">
                    SRESHTA is committed to materialize its vision through its extensive training programs, seminars, internships, and workshops. We are dedicated to realizing its mission and exposing graduates and undergraduates to the industry.
                  </p>
                </CardContent>
              </Card>
            </MotionSection>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
