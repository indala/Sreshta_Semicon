'use client'
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { AnimatedIcon } from "@/components/common/AnimatedIcon";
import { MotionSection } from "@/components/common/MotionSection";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <MotionSection className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
          Ready to Start Your Career in VLSI?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-200">
          Contact us today to learn more about our courses and how we can help you achieve your career goals.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg font-semibold">
          <a href="tel:7801009777" className="flex items-center gap-2 hover:underline">
            <AnimatedIcon rotate={-10}>
              <Phone className="h-5 w-5" />
            </AnimatedIcon>
            <span>7801009777</span>
          </a>
          <a href="mailto:info@sreshtasemicon.com" className="flex items-center gap-2 hover:underline">
            <AnimatedIcon>
              <Mail className="h-5 w-5" />
            </AnimatedIcon>
            <span>info@sreshtasemicon.com</span>
          </a>
        </div>
        <div className="mt-8">
          <Button asChild size="lg" variant="secondary" className="font-bold">
            <Link href="/register">Register for a Course</Link>
          </Button>
        </div>
      </MotionSection>
    </section>
  );
}
