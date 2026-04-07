import { useState, useEffect } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends HTMLMotionProps<"img"> {
  aspectRatio?: "square" | "video" | "wide" | "tall" | "auto" | string;
  fallbackSrc?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const OptimizedImage = ({
  src,
  alt,
  className,
  aspectRatio = "square",
  fallbackSrc = "/placeholder-cake.png",
  priority = false,
  objectFit = "cover",
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;
    if (img.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  const aspectRatios: Record<string, string> = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/9]",
    tall: "aspect-[3/4]",
    auto: "aspect-auto",
  };

  const ratioClass = aspectRatios[aspectRatio] || aspectRatio;

  return (
    <div className={cn("relative overflow-hidden bg-muted/10", ratioClass, className)}>
      {/* Skeleton Placeholder */}
      <AnimatePresence>
        {!isLoaded && !error && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 skeleton z-10"
          />
        )}
      </AnimatePresence>

      {/* Actual Image */}
      <motion.img
        src={error ? fallbackSrc : src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={cn(
          "w-full h-full transition-transform duration-500",
          objectFit === "cover" ? "object-cover" : 
          objectFit === "contain" ? "object-contain" : 
          objectFit === "fill" ? "object-fill" : 
          objectFit === "scale-down" ? "object-scale-down" : "object-none",
          !isLoaded && "scale-105"
        )}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
