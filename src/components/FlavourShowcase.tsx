import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

// Import images
import img1 from "@/assets/new_images/IMG20260308114828compresed.jpg";
import img2 from "@/assets/new_images/IMG20260308115157compresed.jpg";
import img3 from "@/assets/new_images/IMG20260308115242compresed.jpg";
import img4 from "@/assets/new_images/IMG20260308115349compresed.jpg";
import img5 from "@/assets/new_images/IMG20260308115422compresed.jpg";
import img6 from "@/assets/new_images/IMG20260308115840compresed.jpg";
import img7 from "@/assets/new_images/IMG20260308115917compresed.jpg";
import img8 from "@/assets/new_images/IMG20260308120014compresed.jpg";
import img9 from "@/assets/new_images/IMG20260308120059compresed.jpg";
import img10 from "@/assets/new_images/IMG20260308120333compresed.jpg";
import img11 from "@/assets/new_images/IMG20260308120408compresed.jpg";
import img13 from "@/assets/new_images/IMG20260308120441compresed.jpg";
import pastry1 from "@/assets/new_images/pastry1.jpg";
import pastry2 from "@/assets/new_images/pastry2.jpg";
import pastry3 from "@/assets/new_images/pastry3.jpg";

const cakeFlavours = [
  { name: "Vanilla Dry Fruit", image: img1, price: "₹270", desc: "350 gm – Rich vanilla sponge loaded with premium dry fruits" },
  { name: "Gulkand Cake", image: img2, price: "₹270", desc: "350 gm – Exquisite rose petal preserve infused cake" },
  { name: "Mango Cake", image: img3, price: "₹250", desc: "350 gm – Fresh and pulpy mango flavour in every bite" },
  { name: "Chocolate Kiwi", image: img4, price: "₹250", desc: "350 gm – Unique blend of rich chocolate and zesty kiwi" },
  { name: "Cassata", image: img5, price: "₹350", desc: "500 gm – Traditional multi-layered ice cream style cake" },
  { name: "Raspberry", image: img6, price: "₹270", desc: "350 gm – Sweet and tangy raspberry delight" },
  { name: "Kulfi Falooda", image: img7, price: "₹250", desc: "350 gm – Fusion cake with traditional kulfi and falooda flavours" },
  { name: "Mango Coffee", image: img8, price: "₹270", desc: "350 gm – Tropical mango combined with a hint of coffee" },
  { name: "Red Velvet", image: img9, price: "₹300 / ₹450", desc: "350/600 gm – Classic velvet texture with creamy frosting" },
  { name: "Anjeer (Fig Cake)", image: img10, price: "₹270", desc: "350 gm – Nature's sweetness with premium figs" },
  { name: "Crunchy Chocolate", image: img11, price: "₹400", desc: "600 gm – Densely rich chocolate with a satisfying crunch" },
  { name: "Mixed Fruits", image: img13, price: "₹350", desc: "600 gm – Abundance of fresh seasonal fruits on a light sponge" },
];

const pastryFlavours = [
  { name: "Khava Pastry", image: pastry1, price: "₹60", desc: "Traditional and rich khava flavoured flaky pastry" },
  { name: "Lychee Gulkand Pastry", image: pastry2, price: "₹60", desc: "Delicate lychee and sweet gulkand infusion" },
  { name: "Brownie", image: pastry3, price: "₹80", desc: "Gooey, chocolatey brownie with a perfect crust" },
];

const WHATSAPP_BASE = "https://wa.me/919762632539?text=";

const FlavourShowcase = () => {
  return (
    <section id="flavours" className="section-padding bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-secondary text-xs font-medium tracking-wider uppercase opacity-70">Our Menu</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-[#2d2d2d]">
            Our <span className="text-gold-gradient">Menu</span>
          </h2>
          <p className="text-[#555] mt-3 max-w-lg mx-auto text-sm">
            Handcrafted cakes and delicious pastries for every occasion.
          </p>
        </div>

        {/* Delicious Cakes Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6 border-b border-[#2d2d2d]/10 pb-3">
            <span className="text-xl">🎂</span>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d]">Delicious Cakes</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cakeFlavours.map((cake, i) => (
              <motion.a
                key={`${cake.name}-${i}`}
                href={`${WHATSAPP_BASE}Hi, I want to order ${encodeURIComponent(cake.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col border border-border/50"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="relative aspect-square overflow-hidden bg-white p-2">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1 bg-card">
                  <div className="flex justify-between items-start mb-1.5">
                    <h4 className="font-heading font-semibold text-base text-card-foreground pr-2 line-clamp-1">
                      {cake.name}
                    </h4>
                    <span className="text-accent font-bold mt-0.5 text-sm whitespace-nowrap">{cake.price}</span>
                  </div>
                  <p className="text-muted-foreground text-xs mb-4 line-clamp-2 min-h-[32px]">
                    {cake.desc}
                  </p>
                  <div className="mt-auto w-full bg-[#cca64b] hover:bg-[#b5923f] text-white py-1.5 rounded-lg font-medium text-xs transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                    <ShoppingBag size={14} />
                    <span>Order Now</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Pastries Section */}
        <div>
          <div className="flex items-center gap-2 mb-6 border-b border-[#2d2d2d]/10 pb-3">
            <span className="text-xl">🧁</span>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d]">Mousse, Cheese Cups & Pastries</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastryFlavours.map((pastry, i) => (
              <motion.a
                key={`${pastry.name}-${i}`}
                href={`${WHATSAPP_BASE}Hi, I want to order ${encodeURIComponent(pastry.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col border border-border/50"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="relative aspect-square overflow-hidden bg-white p-2">
                  <img
                    src={pastry.image}
                    alt={pastry.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1 bg-card">
                  <div className="flex justify-between items-start mb-1.5">
                    <h4 className="font-heading font-semibold text-base text-card-foreground pr-2 line-clamp-1">
                      {pastry.name}
                    </h4>
                    <span className="text-accent font-bold mt-0.5 text-sm whitespace-nowrap">{pastry.price}</span>
                  </div>
                  <p className="text-muted-foreground text-xs mb-4 line-clamp-2 min-h-[32px]">
                    {pastry.desc}
                  </p>
                  <div className="mt-auto w-full bg-[#cca64b] hover:bg-[#b5923f] text-white py-1.5 rounded-lg font-medium text-xs transition-colors flex justify-center items-center gap-1.5 shadow-sm">
                    <ShoppingBag size={14} />
                    <span>Order Now</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlavourShowcase;
