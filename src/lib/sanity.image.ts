import imageUrlBuilder from "@sanity/image-url";
import { sanity } from "./sanity.client";

const builder = imageUrlBuilder(sanity);

/**
 * Generate optimized image URLs from Sanity image objects
 */
export function urlFor(source: any) {
  return builder.image(source);
}
