import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { MessageCircle, TrendingUp } from "lucide-react";

import { getOrderCount } from "@/lib/orderCounter";


// Animated Number component
function AnimatedNumber({ value }: { value: number }) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 80, damping: 18 });
  const display = useTransform(spring, (v) => Math.round(v).toString());
  const [displayStr, setDisplayStr] = useState("0");

  useEffect(() => {
    motionVal.set(value);
  }, [value, motionVal]);

  useEffect(() => {
    return display.on("change", (v) => setDisplayStr(v));
  }, [display]);

  return <span>{displayStr}</span>;
}

const OrdersCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Initial fetch
    getOrderCount().then(setCount);

    // Listen for global updates
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail !== undefined) {
        setCount(customEvent.detail);
      } else {
        getOrderCount().then(setCount);
      }
    };

    window.addEventListener("tcw-whatsapp-click", handler);
    return () => window.removeEventListener("tcw-whatsapp-click", handler);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-accent/8 blur-[80px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-xs font-medium tracking-wider uppercase">
            Live Stats
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Orders From{" "}
            <span className="text-gold-gradient">Website</span>
          </h2>
        </motion.div>

        {/* Premium Compact Widget */}
        <motion.div
          className="flex justify-center mt-2 relative"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          {/* Subtle drop shadow ring floating behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-36 bg-accent/20 blur-2xl rounded-3xl mix-blend-screen" />

          <div className="group relative flex flex-col items-center justify-center bg-gradient-to-b from-[#2a2d2a]/80 to-[#1a1c1a]/95 backdrop-blur-xl border border-accent/40 w-32 h-44 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(204,166,75,0.4)] overflow-hidden">
            
            {/* Elegant Inner Glows */}
            <div className="absolute -top-10 -left-10 w-28 h-28 bg-accent/30 rounded-full blur-[30px] group-hover:bg-accent/40 transition-colors duration-500" />
            <div className="absolute -bottom-10 -right-8 w-24 h-24 bg-yellow-600/20 rounded-full blur-[25px]" />

            {/* Ambient Pulse Border */}
            <motion.div
              className="absolute inset-0 rounded-[2rem] border border-yellow-500/20"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Glowing Live Indicator Dot */}
            <div className="absolute top-4 right-4 flex h-3 w-3 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_2px_rgba(34,197,94,0.8)]"></span>
            </div>

            {/* Gorgeous Digit with Gold Gradient */}
            <div 
              className="relative z-10 text-[6rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#fef3c7] via-[#cca64b] to-[#99772d] drop-shadow-xl"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              <AnimatedNumber value={count} />
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrdersCounter;
