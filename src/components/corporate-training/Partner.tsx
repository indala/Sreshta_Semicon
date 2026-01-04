
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Partner() {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold font-headline mb-4">Partner with Us</h2>
      <p className="max-w-3xl mx-auto text-lg mb-8">
          Let&apos;s collaborate to create a training program that addresses your team&apos;s unique challenges and goals. Contact us for a consultation.
      </p>
      <Button size="lg" asChild>
          <Link href="/contact">Inquire Now</Link>
      </Button>
    </div>
  );
}
