import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techPoints = [
  {
    number: "01",
    title: "Fiber Network",
    description: "Ultra-low latency fiber optic cables spanning thousands of miles",
  },
  {
    number: "02",
    title: "Data Centers",
    description: "State-of-the-art facilities with redundant power and cooling",
  },
  {
    number: "03",
    title: "Edge Computing",
    description: "Distributed processing nodes for real-time data delivery",
  },
  {
    number: "04",
    title: "AI Optimization",
    description: "Machine learning algorithms for network traffic optimization",
  },
];

const TechSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-editorial bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-small text-primary mb-6 block">
            Technology Stack
          </span>
          <h2 className="heading-section max-w-3xl text-background">
            The systems powering tomorrow's connectivity
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-background/10">
          {techPoints.map((point, index) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-foreground p-10 md:p-14 group hover:bg-foreground/90 transition-colors duration-500"
            >
              <span className="font-display text-5xl text-background/20 group-hover:text-primary transition-colors duration-500 mb-6 block">
                {point.number}
              </span>
              <h3 className="font-display text-2xl text-background mb-4">
                {point.title}
              </h3>
              <p className="text-background/60">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
