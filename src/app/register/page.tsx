import { PageHeader } from "@/components/common/PageHeader";
import { RegistrationForm } from "@/components/forms/RegistrationForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Course Registration | SRESHTA SEMICON TECHNOLOGIES PVT LTD',
  description: 'Register for our industry-leading VLSI courses and take the first step towards a successful career in the semiconductor industry.',
};

export default function RegisterPage() {
  return (
    <div>
      <PageHeader
        title="Course Registration"
        description="Take the first step towards your career in VLSI."
        imageId="register-header"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-headline">Registration Form</CardTitle>
              <CardDescription className="text-base">
                Please fill out the form below to register for a course. We will get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegistrationForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}