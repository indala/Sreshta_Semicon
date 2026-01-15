'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedArrow } from "@/components/common/AnimatedArrow";
import { MotionGrid } from "@/components/common/MotionGrid";
import { MotionItem } from "@/components/common/MotionItem";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function CourseCard({ course }: { course: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-border to-transparent hover:from-red-500/50 transition-colors duration-500 group"
    >
      <Card className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card border-none transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)] group-hover:-translate-z-10">
        {/* Dynamic Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [mouseXSpring, mouseYSpring],
              ([x, y]) => `radial-gradient(600px circle at ${(Number(x) + 0.5) * 100}% ${(Number(y) + 0.5) * 100}%, rgba(220, 38, 38, 0.1), transparent 40%)`
            ),
          }}
        />

        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden" style={{ transform: "translateZ(50px)" }}>
          {course.image && (
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          <div className="absolute top-4 right-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            {course.category}
          </div>
        </div>

        <CardHeader className="pt-6" style={{ transform: "translateZ(30px)" }}>
          <CardTitle className="text-2xl font-headline group-hover:text-primary transition-colors duration-300">
            {course.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow" style={{ transform: "translateZ(20px)" }}>
          <p className="text-muted-foreground line-clamp-3 mb-6">
            {course.description}
          </p>
        </CardContent>

        <div className="p-6 pt-0" style={{ transform: "translateZ(40px)" }}>
          <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 border-primary/20">
            <Link href={`/courses/${course.slug}`}>
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500"
          layoutId={`border-${course.slug}`}
        />
      </Card>
    </motion.div>
  );
}

export default function Courses() {
  const displayCourses = courses.slice(0, 5);

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-headline mb-4"
          >
            Our <span className="text-primary">Core</span> Courses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Master the future of technology with our industry-leading VLSI and Embedded Systems programs.
          </motion.p>
        </div>

        <MotionGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayCourses.map((course, index) => (
            <MotionItem
              key={course.title}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CourseCard course={course} />
            </MotionItem>
          ))}
        </MotionGrid>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/courses"
            className="group flex items-center gap-3 text-lg font-semibold hover:text-primary transition-colors"
          >
            <span className="relative">
              Explore All Courses
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </span>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <ArrowRight className="h-5 w-5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
