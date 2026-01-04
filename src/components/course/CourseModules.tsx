"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MotionSection } from "@/components/common/MotionSection";
import { motion } from "framer-motion";
import { useMemo } from "react";

interface Module {
  title: string;
  overview: string;
}

interface CourseModulesProps {
  modules: Module[];
  courseSlug: string;
}

/* ---------- Animation Variants ---------- */

const listVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const MotionAccordionItem = motion.create(AccordionItem);

export function CourseModules({ modules, courseSlug }: CourseModulesProps) {
  // memoized for performance
  const defaultOpen = useMemo(
    () => modules.map((_, index) => `item-${index}`),
    [modules]
  );

  return (
    <MotionSection>
      <div className="container py-12 px-2">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-1">Course Modules</h2>
              <p className="text-sm text-muted-foreground">
                Expand each module to see what you will learn in detail.
              </p>
            </div>

            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[0.6rem] sm:text-xs font-semibold text-primary">
              {modules.length} modules
            </span>
          </div>

          {/* Modules */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="show"   // ✅ shows immediately
          >
            <Accordion
              type="multiple"
              defaultValue={defaultOpen}
              className="space-y-3"
            >
              {modules.map((module, index) => (
                <MotionAccordionItem
                  key={module.title}
                  value={`item-${index}`}
                  variants={itemVariants}
                  className="border rounded-xl bg-card/80 backdrop-blur-sm shadow-sm transition-shadow data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="px-4 py-3 md:px-5 md:py-4 no-underline hover:no-underline">
                    <div className="flex items-center gap-4 text-left w-full">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="font-semibold text-base md:text-lg">
                          {module.title}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-4 pb-4 md:px-5 md:pb-5">
                    <div className="rounded-lg bg-muted/40 p-4 text-sm leading-relaxed">
                      {module.overview}
                    </div>
                  </AccordionContent>
                </MotionAccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href={`/register?course=${courseSlug}`}>
                Register for this Course
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
