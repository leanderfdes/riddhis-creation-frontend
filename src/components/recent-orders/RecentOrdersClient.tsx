"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";

gsap.registerPlugin(ScrollTrigger);

export default function RecentOrdersClient({
  orders
}: {
  orders: any[];
}) {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: i % 2 === 0 ? -40 : 40
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true
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
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl mb-4">
            Recent Creations
          </h2>
          <p className="text-sage max-w-xl mx-auto">
            A glimpse of our recently completed handcrafted work.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-24">
          {orders.map((order, i) => (
            <div
              key={order._id}
              ref={(el) => {
                if (el) itemsRef.current[i] = el;
              }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                i % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={urlFor(order.image).width(800).height(600).quality(80).url()}
                  alt={order.caption}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    rounded-xl shadow-sm
                    hover:shadow-xl
                    transition-shadow duration-300
                    w-full object-cover
                  "
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <p className="font-serif text-xl mb-2 leading-snug">
                  {order.caption}
                </p>
                {order.location && (
                  <p className="text-sm text-sage">
                    {order.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
