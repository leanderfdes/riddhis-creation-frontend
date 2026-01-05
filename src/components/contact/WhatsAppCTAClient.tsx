"use client";

type Props = {
  whatsappNumber?: string;
};

export default function WhatsAppCTAClient({
  whatsappNumber
}: Props) {
  const number =
    whatsappNumber ||
    process.env.NEXT_PUBLIC_WHATSAPP_FALLBACK;

  if (!number) return null;

  const link = `https://wa.me/${number}?text=Hi! I'm interested in your crochet work.`;

  return (
    <section className="py-32 bg-sage text-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-10 py-4 rounded-full text-lg hover:scale-105 transition"
      >
        Chat on WhatsApp
      </a>
    </section>
  );
}
