"use client";

import { useEffect } from "react";
import { PortableText } from "@portabletext/react";
import gsap from "gsap";

type Props = {
  product: any;
  onClose: () => void;
  whatsappNumber: string;
};

export default function ProductModal({
  product,
  onClose,
  whatsappNumber
}: Props) {
  // 🔒 Lock body scroll + ESC close
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    // 🎬 Entry animation
    gsap.fromTo(
      "#product-modal",
      { opacity: 0, scale: 0.96 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: "power3.out"
      }
    );

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const message = encodeURIComponent(
    `Hi! I'm interested in "${product.title}". Can you share more details?`
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        id="product-modal"
        onClick={(e) => e.stopPropagation()}
        className="
          bg-cream w-full max-w-4xl
          rounded-xl shadow-xl
          max-h-[90vh] overflow-y-auto
        "
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-xl hover:opacity-70"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          
          {/* IMAGE */}
          <div>
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="font-serif text-3xl mb-4">
              {product.title}
            </h3>

            {product.description && (
              <div className="text-sage space-y-4 mb-4">
                <PortableText value={product.description} />
              </div>
            )}

            {product.customNote && (
              <p className="italic text-sm mb-6">
                {product.customNote}
              </p>
            )}

            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block bg-green-600 text-white
                px-6 py-3 rounded-full
                hover:scale-105 transition
              "
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
