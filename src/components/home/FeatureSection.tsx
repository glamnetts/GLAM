import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import featureCity from "@/assets/feature-city.jpg";

const FeatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-editorial">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={featureCity}
                alt="Connected city network"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlapping stat block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -right-8 md:right-8 bg-primary text-primary-foreground p-8 max-w-xs"
            >
              <p className="font-display text-5xl mb-2">50M+</p>
              <p className="text-sm text-primary-foreground/80">
                Homes and businesses connected through our network
              </p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 mt-16 lg:mt-0"
          >
            <span className="text-small text-primary mb-6 block">
              Smart Cities
            </span>
            <h3 className="heading-editorial mb-8">
              Connecting communities with next-generation infrastructure
            </h3>
            <p className="text-editorial mb-8">
              From metropolitan hubs to rural communities, our network 
              infrastructure ensures everyone has access to reliable, 
              high-speed internet connectivity.
            </p>
            <ul className="space-y-4">
              {[
                "Citywide fiber optic coverage",
                "5G-ready infrastructure",
                "Enterprise network solutions",
                "24/7 network monitoring",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
