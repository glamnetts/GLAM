import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EditorialIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-editorial">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-small text-primary mb-6 sm:mb-8 block">Our Vision</span>
          <h2 className="heading-editorial text-foreground mb-8 sm:mb-10 md:mb-12">
            We engineer the fiber optic cables and internet infrastructure that connects the world, 
            enabling lightning-fast data transmission across continents.
          </h2>
          <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-20">
            <p className="text-editorial flex-1">
              From submarine fiber optic cables spanning oceans to last-mile ethernet connections in your home, 
              we specialize in building and maintaining the physical cable infrastructure that makes the internet possible.
            </p>
            <p className="text-editorial flex-1">
              Our advanced cable systems deliver gigabit speeds, minimal latency, and unmatched reliability — 
              connecting millions of homes, businesses, and data centers with cutting-edge fiber optic technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EditorialIntro;
