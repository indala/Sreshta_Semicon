
import { PageHeader } from "@/components/common/PageHeader";
import { RegistrationForm } from "@/components/forms/RegistrationForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from 'next';
import { MotionSection } from "@/components/common/MotionSection";

export const metadata: Metadata = {
  title: 'Register | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Register for our VLSI courses and internships. Take the first step towards a successful career in the semiconductor industry.',
};

export default function RegisterPage() {
  return (
    <div>
      <PageHeader 
        title="Register Now"
        description="Begin your journey into the world of semiconductors. Fill out the form to enroll."
        imageId="register-header"
      />

      <MotionSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-headline">Registration Form</CardTitle>
                        <CardDescription className="text-lg">Secure your spot in our upcoming batches.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RegistrationForm />
                    </CardContent>
                </Card>
            </div>
        </div>
      </MotionSection>
    </div>
  );
}