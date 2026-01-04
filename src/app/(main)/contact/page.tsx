
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactInfo from "@/components/contact/ContactInfo";
import Header from "@/components/contact/Header";
import { MotionSection } from "@/components/common/MotionSection";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <MotionSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactFormSection />
          </div>
        </div>
      </MotionSection>
      <MotionSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
            Our Location
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3796.1800723719853!2d83.4216353751774!3d17.92375318305785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU1JzI1LjUiTiA4M8KwMjUnMjcuMiJF!5e0!3m2!1sen!2sin!4v1767550954080!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
