
import { PageHeader } from "@/components/common/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SRESHTA SEMICON TECHNOLOGIES PVT LTD",
  description:
    "Learn about SRESHTA SEMICON TECHNOLOGIES PVT LTD, our vision, mission, and commitment to excellence in VLSI and semiconductor training.",
};

export default function Header() {
  return (
    <PageHeader
      title={["About", "SRESHTA\u00A0SEMICON"]}
      description="Pioneering excellence in semiconductor education and training."
      imageId="about-header"
    />
  );
}
