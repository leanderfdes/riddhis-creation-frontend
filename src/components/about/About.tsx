import { sanity } from "@/lib/sanity.client";
import { aboutSectionQuery } from "@/lib/sanity.queries";
import AboutClient from "./AboutClient";

export default async function About() {
  const data = await sanity.fetch(aboutSectionQuery);

  if (!data) return null;

  return (
    <AboutClient
      title={data.title}
      content={data.content}
      image={data.image}
    />
  );
}
