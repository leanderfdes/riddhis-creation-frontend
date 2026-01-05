"use client";

import { useEffect, useRef } from "react";
import { fadeUp } from "@/animations/scroll";

export default function HeroClient({
  brandName,
  tagline
}: {
  brandName: string;
  tagline: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) fadeUp(ref.current);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-cream">
      <div ref={ref} className="text-center px-6">
        <h1 className="font-serif text-6xl mb-4">
          {brandName}
        </h1>
        <p className="text-sage text-lg">
          {tagline}
        </p>
      </div>
    </section>
  );
}
