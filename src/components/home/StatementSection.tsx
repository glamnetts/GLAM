import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StatementSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = "Built for the Future of Internet & Connectivity".split(" ");

  return (
    <section
      ref={ref}
      className="min-h-[70vh] flex items-center justify-center px-6 md:px-12 lg:px-20 py-32"
    >
      <h2 className="heading-hero text-center max-w-5xl">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.2 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </h2>
    </section>
  );
};

export default StatementSection;
