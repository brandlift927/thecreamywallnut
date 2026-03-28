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
import belgium_chocolate from "@/assets/new_images/belgium_chocolate.jpg";
import black_forest from "@/assets/new_images/black_forest.jpg";
import choco_chips from "@/assets/new_images/choco_chips.jpg";
import customized_cakes_1 from "@/assets/new_images/customized_cakes_1.jpg";
import delight_chocolate from "@/assets/new_images/delight_chocolate.jpg";
import kitkat from "@/assets/new_images/kitkat.jpg";
import lychee_gulkand from "@/assets/new_images/lychee_gulkand.jpg";
import chocolate_mousse from "@/assets/new_images/chocolate_mousse.jpg";
import rasmalai from "@/assets/new_images/rasmalai.jpg";
import strawberry_banana from "@/assets/new_images/strawberry_banana.jpg";
import strawberry_mango_pastry from "@/assets/new_images/strawberry_mango_pastry.jpg";
import truffle_chocolate from "@/assets/new_images/truffle_chocolate.jpg";
import customized_cakes_2 from "@/assets/new_images/customized_cakes_2.jpg";
import red_velvet_pastry from "@/assets/new_images/red_velvet_pastry.jpg";
import special_cake from "@/assets/new_images/special_cake.jpg";

const customizedGallery = [
  customized_cakes_1,
  customized_cakes_2,
  "/images/customized_cakes/thecreamywalnut_14050108_203101925.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203127272.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203132917.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203140938.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203147311.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203151345.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203158869.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203219005.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203231029.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203236297.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203247232.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203254909.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203303006.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203308741.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203311914.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203314591.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203318364.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203321325.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203326648.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203355921.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203418739.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203426918.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203429496.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203436956.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203441215.jpg",
  "/images/customized_cakes/thecreamywalnut_14050108_203452450.jpg",
];

const cakeFlavours = [
  { name: "KitKat Cake", image: kitkat, price: "₹480", desc: "650 gm – Decorated with crunchy KitKat" },
  { name: "Lychee Gulkand", image: lychee_gulkand, price: "₹370", desc: "600 gm – Sweet lychee and traditional gulkand" },
  { name: "Rasmalai Cake", image: rasmalai, price: "₹450", desc: "600 gm – Traditional Indian sweet rasmalai infused cake" },
  { name: "Strawberry Banana", image: strawberry_banana, price: "₹370", desc: "600 gm – Perfect blend of strawberry and banana" },
  { name: "Truffle Chocolate", image: truffle_chocolate, price: "₹500", desc: "650 gm – Decadent truffle chocolate cake" },
  { name: "Speciality Cake", image: special_cake, price: "Price on Request", desc: "Delicious chef's special cake" },
  { name: "Belgium Chocolate", image: belgium_chocolate, price: "Price on Request", desc: "600 gm – Rich premium chocolate" },
  { name: "Black Forest", image: black_forest, price: "₹350", desc: "600 gm – Classic black forest" },
  { name: "Choco Chips", image: choco_chips, price: "₹400", desc: "600 gm – Loaded with chocolate chips" },
  { name: "Delight Chocolate", image: delight_chocolate, price: "₹300 / ₹400", desc: "350 gm / 550 gm – Irresistible double delight chocolate" },
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
  { name: "Chocolate Mousse", image: chocolate_mousse, price: "₹70", desc: "Smooth and airy chocolate mousse cups" },
  { name: "Strawberry Mango Pastry", image: strawberry_mango_pastry, price: "₹60", desc: "Fruity fusion of strawberry and mango" },
  { name: "Red Velvet Pastry", image: red_velvet_pastry, price: "₹60", desc: "Classic red velvet with cream cheese" },
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
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {cakeFlavours.map((cake, i) => (
              <motion.a
                key={`${cake.name}-${i}`}
                href={`${WHATSAPP_BASE}Hi, I want to order ${encodeURIComponent(cake.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col border border-border/50"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="relative aspect-square overflow-hidden bg-white">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1 bg-card">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1.5 gap-1">
                    <h4 className="font-heading font-semibold text-sm sm:text-base text-card-foreground pr-2 line-clamp-2 sm:line-clamp-1">
                      {cake.name}
                    </h4>
                    <span className="text-accent font-bold mt-0.5 text-xs sm:text-sm whitespace-nowrap">{cake.price}</span>
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

        {/* Customized Cakes Gallery Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6 border-b border-[#2d2d2d]/10 pb-3">
            <span className="text-xl">✨</span>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2d2d2d]">Customized Cakes Gallery</h3>
          </div>
          <p className="text-[#555] text-sm mb-6">Price and weight depend on your requirements. Pick any design you like and inquire!</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {customizedGallery.map((imgSrc, i) => (
              <motion.a
                key={`gallery-${i}`}
                href={`${WHATSAPP_BASE}Hi, I want to inquire about a customized cake.`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer block border border-border/10 aspect-square bg-white"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <img
                  src={imgSrc}
                  alt={`Customized Cake ${i + 1}`}
                  className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 text-[#2d2d2d] px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <ShoppingBag size={16} className="text-[#cca64b]" />
                    <span>Inquire Now</span>
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

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {pastryFlavours.map((pastry, i) => (
              <motion.a
                key={`${pastry.name}-${i}`}
                href={`${WHATSAPP_BASE}Hi, I want to order ${encodeURIComponent(pastry.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col border border-border/50"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="relative aspect-square overflow-hidden bg-white">
                  <img
                    src={pastry.image}
                    alt={pastry.name}
                    className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1 bg-card">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1.5 gap-1">
                    <h4 className="font-heading font-semibold text-sm sm:text-base text-card-foreground pr-2 line-clamp-2 sm:line-clamp-1">
                      {pastry.name}
                    </h4>
                    <span className="text-accent font-bold mt-0.5 text-xs sm:text-sm whitespace-nowrap">{pastry.price}</span>
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
