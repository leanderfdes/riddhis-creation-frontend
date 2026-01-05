"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  title: string;
  content: any[];
  image?: any; // ✅ Sanity image object
};

export default function AboutClient({
  title,
  content,
  image
}: Props) {
  const linesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    linesRef.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="py-32 bg-cream px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div>
          <h2 className="font-serif text-4xl mb-8">
            {title}
          </h2>

          <div className="space-y-6 text-sage leading-relaxed">
            {content.map((block, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) linesRef.current[i] = el;
                }}
              >
                <PortableText value={[block]} />
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        {image && (
          <div className="rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <Image
              src={urlFor(image).width(800).height(800).quality(80).url()}
              alt={title}
              width={800}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
