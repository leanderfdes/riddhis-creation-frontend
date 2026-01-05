import "./globals.css";
import type { Metadata } from "next";
import { sanity } from "@/lib/sanity.client";
import { siteSettingsQuery } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const settings = await sanity.fetch(siteSettingsQuery);

    const title =
      settings?.seoTitle || "Riddhi’s Creation";
    const description =
      settings?.seoDescription ||
      "Handcrafted crochet creations made with care and intention.";

    const ogImage = settings?.seoImage
      ? urlFor(settings.seoImage)
          .width(1200)
          .height(630)
          .quality(80)
          .url()
      : undefined;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: ogImage ? [ogImage] : []
      }
    };
  } catch (error) {
    // ✅ SAFETY FALLBACK — NEVER BREAK UI
    return {
      title: "Riddhi’s Creation",
      description: "Handcrafted crochet studio"
    };
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
