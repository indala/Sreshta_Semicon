
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionSection } from "@/components/common/MotionSection";

export default function ContactFormSection() {
  return (
    <MotionSection delay={0.4} direction="left">
      <Card className="p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Send us a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </MotionSection>
  );
}
