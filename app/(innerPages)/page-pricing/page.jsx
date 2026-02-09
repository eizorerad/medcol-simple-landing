import { redirect } from "next/navigation";

export const metadata = {
  title: "Pricing | Medcol - AI-Powered Pre-Visit Preparation",
  description:
    "Contact us for pricing information about Medcol's AI-powered pre-visit preparation platform.",
};

export default function PricingPage() {
  redirect("/page-contact");
}
