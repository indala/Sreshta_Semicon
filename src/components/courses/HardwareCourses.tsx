
import { courses } from "@/lib/constants";
import CourseCard from "@/components/common/CourseCard";

export default function HardwareCourses() {
  const hardwareCourses = courses.filter(course => course.category === 'Hardware Courses');

  return (
    <section id="hardware-courses">
      <h2 className="text-3xl font-bold mb-6">Hardware Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hardwareCourses.map(course => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}
