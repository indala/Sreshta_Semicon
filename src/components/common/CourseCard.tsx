
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Course {
  slug: string;
  title: string;
  description: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="border-red-900 border-2 shadow shadow-lg hover:shadow-xl transition-all duration-700 relative hover:-translate-y-2 hover:border-1 ">
      
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <Link href={`/courses/${course.slug}`}>
            Learn More <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
