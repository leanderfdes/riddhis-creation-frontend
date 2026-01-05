import { sanity } from "@/lib/sanity.client";

export default async function RecentOrders() {
  const orders = await sanity.fetch(`
    *[_type=="order"] | order(order asc){
      caption,
      location,
      "image": image.asset->url
    }
  `);

  return (
    <section className="py-24 px-6 bg-cream">
      <h2 className="text-center font-serif text-3xl mb-16">
        Recent Creations
      </h2>

      <div className="space-y-20 max-w-4xl mx-auto">
        {orders.map((o: any, i: number) => (
          <div key={i} className="text-center">
            <img
              src={o.image}
              className="rounded-xl mb-4 mx-auto"
            />
            <p className="text-sage">
              {o.caption} — {o.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
