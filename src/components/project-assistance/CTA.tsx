
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold font-headline mb-4">Get Expert Help Today</h2>
      <p className="max-w-3xl mx-auto text-lg mb-8">
          Don&apos;t let project challenges hold you back. Reach out to us to learn how our project assistance program can help you succeed.
      </p>
      <Button size="lg" asChild>
          <Link href="/contact">Contact Us</Link>
      </Button>
    </div>
  );
}
