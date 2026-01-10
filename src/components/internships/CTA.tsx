
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="container mx-auto px-4 text-center  ">
      <div className="bg-gray-100 border-2 border-gray-500 lg:mx-40  p-10 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold font-headline mb-4">Ready to Launch Your Career?</h2>
      <p className="max-w-2xl mx-auto text-lg mb-8">
          Our internships are the perfect launchpad for a successful career in the semiconductor industry. Apply now to secure your spot.
      </p>
      <Button size="lg" asChild>
          <Link href="/contact">Contact Admissions</Link>
      </Button>
      </div>
    </div>
  );
}
