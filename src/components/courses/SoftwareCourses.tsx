
import { courses } from "@/lib/constants";
import CourseCard from "@/components/common/CourseCard";

export default function SoftwareCourses() {
  const softwareCourses = courses.filter(course => course.category === 'Software Courses');

  return (
    <section id="software-courses" className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Software Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {softwareCourses.map(course => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}
