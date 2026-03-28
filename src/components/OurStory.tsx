import { motion } from "framer-motion";
import shopFront from "@/assets/new_images/TWC_FINAL.jpg";

const OurStory = () => {
  return (
    <section className="section-padding bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl w-full h-[300px] sm:h-[400px] md:h-[450px] bg-[#faf9f6]/50 flex items-center justify-center border border-border/20">
              <img 
                src={shopFront} 
                alt="The Creamy Walnut Shop" 
                className="w-full h-full object-contain p-2"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
          
          {/* Text Side */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col justify-center mt-6 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#cca64b] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-3">Our Story</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#2d2d2d] leading-tight">
              We Cherish Your <span className="text-gold-gradient">Memories...</span>
            </h2>
            <div className="space-y-4 text-[#555] text-sm md:text-base leading-relaxed">
              <p>
                At The Creamy Walnut, we don't just bake cakes — we craft memories. From birthdays to special surprises, every dessert is made with love and premium ingredients.
              </p>
              <p>
                Our passion for perfection is evident in every layer, every swirl, and every bite. We believe that the finest ingredients combined with artisan skill create something truly unforgettable.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
