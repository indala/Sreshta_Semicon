import { notFound } from "next/navigation";
import { courses } from "@/lib/constants";
import { CourseHeader } from "@/components/course/CourseHeader";
import { CourseModules } from "@/components/course/CourseModules";

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

const CourseDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div>
      <CourseHeader
        title={course.title}
        description={course.description}
        imageId="placeholder-3"
      />
      <CourseModules modules={course.modules} courseSlug={course.slug} />
    </div>
  );
};

export default CourseDetailPage;
