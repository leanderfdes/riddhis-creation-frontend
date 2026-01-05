import { sanity } from "@/lib/sanity.client";
import { siteSettingsQuery } from "@/lib/sanity.queries";
import HeroClient from "./HeroClient";

export default async function Hero() {
  const settings = await sanity.fetch(siteSettingsQuery);

  return (
    <HeroClient
      brandName={settings.brandName}
      tagline={settings.tagline}
    />
  );
}
