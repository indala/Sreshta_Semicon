'use client'
import { Button } from "@/components/ui/button";
import { AnimatedArrow } from "@/components/common/AnimatedArrow";
import Link from "next/link";
import { MotionSection } from "@/components/common/MotionSection";

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 font-semibold">
      <MotionSection className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Bridging Academia and Industry
        </h2>
        <p className="max-w-3xl mx-auto text-xl mb-8 text-gray-800">
          SRESHTA SEMICON TECHNOLOGIES PVT LTD is dedicated to acting as an intellectual bridge between universities and the semiconductor industry. We provide world-class training in VLSI and software to nurture industry-ready graduates.
        </p>
        <Button asChild variant="link" className="text-lg text-primary font-bold">
          <Link href="/about">
            Learn More About Us <AnimatedArrow />
          </Link>
        </Button>
      </MotionSection>
    </section>
  );
}
