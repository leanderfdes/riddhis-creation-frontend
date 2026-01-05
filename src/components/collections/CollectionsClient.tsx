"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";
import ProductModal from "./ProductModal";

gsap.registerPlugin(ScrollTrigger);

export default function CollectionsClient({
  collections,
  whatsappNumber
}: {
  collections: any[];
  whatsappNumber: string;
}) {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [activeProduct, setActiveProduct] = useState<any | null>(null);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
          once: true
        }
      }
    );
  }, []);

  return (
    <section className="py-32 bg-beige px-6">
      {/* Section Heading */}
    <div className="max-w-6xl mx-auto mb-16 text-center">
      <h2 className="font-serif text-4xl mb-4">
        Our Creations
      </h2>
      <p className="text-sage max-w-xl mx-auto">
        A selection of handcrafted pieces, thoughtfully made and carefully finished.
      </p>
    </div>
    {/* Collections Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {collections.map((item, i) => (
          <div
            key={item._id}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            onClick={() => setActiveProduct(item)}
            className="group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <Image
              src={urlFor(item.images?.[0]).width(600).height(600).quality(80).url()}
              alt={item.title}
              width={600}
              height={600}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4 font-serif text-lg">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {activeProduct && (
        <ProductModal
          product={activeProduct}
          whatsappNumber={whatsappNumber}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </section>
  );
}
