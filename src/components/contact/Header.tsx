
import { PageHeader } from "@/components/common/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SRESHTA SEMICON TECHNOLOGIES PVT LTD",
  description:
    "Get in touch with SRESHTA SEMICON for course inquiries, corporate training, or any other questions. We are here to help.",
};

export default function Header() {
  return (
    <PageHeader
      title="Contact Us"
      description="We're here to help. Reach out to us with any questions or inquiries."
      imageId="contact-header"
    />
  );
}
