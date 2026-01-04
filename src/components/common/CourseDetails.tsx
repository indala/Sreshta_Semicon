import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface CourseDetailsProps {
    title: string;
    topics: string[];
}

export const CourseDetails = ({ title, topics }: CourseDetailsProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {topics.map((topic, index) => (
                        <li key={index} className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                            <span>{topic}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};
