import { sanity } from "@/lib/sanity.client";
import { siteSettingsQuery } from "@/lib/sanity.queries";
import WhatsAppCTAClient from "./WhatsAppCTAClient";

export default async function WhatsAppCTA() {
  const settings = await sanity.fetch(siteSettingsQuery);

  return (
    <WhatsAppCTAClient
      whatsappNumber={settings?.whatsappNumber}
    />
  );
}
