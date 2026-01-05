"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

type Props = {
  whatsappNumber?: string;
};

export default function FloatingWhatsAppClient({
  whatsappNumber
}: Props) {
  const [visible, setVisible] = useState(false);

  const number =
    whatsappNumber ||
    process.env.NEXT_PUBLIC_WHATSAPP_FALLBACK;

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        "#floating-whatsapp",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out"
        }
      );
    }
  }, [visible]);

  if (!number || !visible) return null;

  const link = `https://wa.me/${number}?text=Hi! I'm interested in your crochet work.`;

  return (
    <a
      id="floating-whatsapp"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        bg-green-600 text-white
        px-5 py-3 rounded-full
        shadow-lg
        text-sm font-medium
        hover:scale-105 transition
      "
    >
      Chat on WhatsApp
    </a>
  );
}
