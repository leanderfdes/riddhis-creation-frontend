import { sanity } from "@/lib/sanity.client";
import { siteSettingsQuery } from "@/lib/sanity.queries";
import FloatingWhatsAppClient from "./FloatingWhatsAppClient";

export default async function FloatingWhatsApp() {
  const settings = await sanity.fetch(siteSettingsQuery);

  return (
    <FloatingWhatsAppClient
      whatsappNumber={settings?.whatsappNumber}
    />
  );
}
