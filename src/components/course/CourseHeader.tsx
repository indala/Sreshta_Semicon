'use client';

import { PageHeader } from "@/components/common/PageHeader";
import { MotionSection } from "@/components/common/MotionSection";

interface CourseHeaderProps {
  title: string;
  description: string;
  imageId: string;
}

export function CourseHeader({ title, description, imageId }: CourseHeaderProps) {
  return (
    <MotionSection>
      <PageHeader
        title={title}
        description={description}
        imageId={imageId}
      />
    </MotionSection>
  );
}
