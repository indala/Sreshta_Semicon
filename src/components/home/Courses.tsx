'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedArrow } from "@/components/common/AnimatedArrow";

export default function Courses() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Our Core Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 5).map((course) => (
            <div key={course.title} className="relative group">
              {/* Rotating glowing border behind the card */}
              <div className="absolute -inset-1 rounded-lg overflow-hidden pointer-events-none">
                <div className="w-full h-full rounded-lg bg-gradient-to-r from-red-500 via-red-400 to-red-500 blur-xl opacity-70 animate-rotate-slow" />
              </div>

              {/* Static Card */}
              <Card className="relative z-10 flex flex-col border border-red-500 rounded-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-primary">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-6">{course.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/courses/${course.slug}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* View more CTA */}
        <div className="mt-10 flex justify-center">
          <Button
            asChild
            variant="link"
            className="text-base md:text-lg font-semibold text-primary flex items-center gap-2"
          >
            <Link href="/courses">
              View more courses
              <AnimatedArrow />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
