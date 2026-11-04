import React from 'react'
import {Gem,Truck,ShieldCheck,Sparkles} from 'lucide-react'


const features = [
  {
    id: 1,
    title: "Premium Quality",
    description:
      "Die-cast zinc alloy with hand-painted details on every miniature model.",
    icon: Gem,
  },
  {
    id: 2,
    title: "Fast Delivery",
    description:
      "Quick shipping with secure packaging to protect every collectible.",
    icon: Truck,
  },
  {
    id: 3,
    title: "Secure Payment",
    description:
      "Safe and encrypted checkout with trusted payment methods.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Limited Editions",
    description:
      "Exclusive collectible models with premium packaging and certificates.",
    icon: Sparkles,
  },
];

const  WhyChoose = () => {
  return (
    <div>
       <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <p className="text-white  uppercase tracking-[0.35em] text-sm font-semibold">
            Our Promise
          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-extrabold text-[#D3AF37]  uppercase">
            Why Choose MotoMini
          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="bg-[#141414] border border-zinc-800 rounded-3xl p-8 transition duration-300 hover:border-[#D3AF37]  hover:-translate-y-2"
              >

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-black border-[#D3AF37]  flex items-center justify-center">
                  <Icon
                    size={28}
                    className="text-[#D3AF37] "
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-white text-2xl font-bold uppercase">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-400 leading-8">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
    </div>
  )
}

export default  WhyChoose
