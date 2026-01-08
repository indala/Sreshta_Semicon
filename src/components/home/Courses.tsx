'use client';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {courses.slice(0, 5).map((course, index) => (
            <div
              key={course.title}
              style={{ animationDelay: `${index * 0.6}s` }}
              className="relative w-full max-w-[422px] rounded-2xl p-[2px] bg-red-600 animate-border-spin"
            >
              {/* Rotating white dot */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl animate-orbit">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.9)]" />
              </span>

              <Card className="group relative z-10 flex h-full flex-col rounded-2xl bg-card transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
                {/* hover glow */}
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-red-500/10 blur-xl" />

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
