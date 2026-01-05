import { sanity } from "@/lib/sanity.client";
import {
  collectionsQuery,
  siteSettingsQuery
} from "@/lib/sanity.queries";
import CollectionsClient from "./CollectionsClient";

export default async function Collections() {
  const [collections, settings] = await Promise.all([
    sanity.fetch(collectionsQuery),
    sanity.fetch(siteSettingsQuery)
  ]);

  const whatsappNumber =
    settings?.whatsappNumber ||
    process.env.NEXT_PUBLIC_WHATSAPP_FALLBACK;

  if (!collections || collections.length === 0) {
    return null;
  }

  return (
    <CollectionsClient
      collections={collections}
      whatsappNumber={whatsappNumber}
    />
  );
}
