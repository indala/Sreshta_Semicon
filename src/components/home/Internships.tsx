'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Internships() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center ">
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
  );
}
