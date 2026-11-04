import React from 'react'
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: "Sport Bike",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
      category:"Sport Bike"
  },
  {
    name: "Advanture",
    image:
      "https://images.unsplash.com/photo-1517846693594-1567da72af75?q=80&w=1200&auto=format&fit=crop",
      category:"Adventure"
  },
  {
    name: "Super Bike",
    image:
      "https://i.pinimg.com/736x/e8/45/9f/e8459fe21d04fcbbccc87b296f796838.jpg",
      category:"Super Bike"
  },
  {
    name: "Naked Bike",
    image:
      "https://images.unsplash.com/photo-1515777315835-281b94c9589f?q=80&w=1200&auto=format&fit=crop",
      category:"Naked Bike"
  },
  {
    name: "Limited",
    image:
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=1200&auto=format&fit=crop",
      category:"Sport Bike"
  },
  {
    name: "Adventure",
    image:
      "https://i.pinimg.com/736x/1d/65/9f/1d659f9afd74847a0e6937ab2adb5e81.jpg",
      category:"Adventure"
  },
];

export default function Categories() {
  const navigate=useNavigate()
    
  return (
    <div>
        <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text- uppercase tracking-[0.35em] text-sm font-semibold">
          Browse By Type
        </p>

        <h2 className="mt-4 text-center text-5xl lg:text-6xl font-extrabold text-[#D3AF37] uppercase">
          Shop Categories
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item) => (
            <div
            onClick={()=>navigate('/shop',{
              state:{category:item.category}
            })}
              key={item.name}
              className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition duration-500"></div>

              <div className="absolute bottom-6 left-6">
                <p className="text-white uppercase tracking-widest text-xs font-semibold">
                  Collection
                </p>

                <h3 className="text-[#D3AF37] text-3xl font-bold mt-1">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      
    </div>
  )
}
