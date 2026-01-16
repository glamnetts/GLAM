import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 750000, suffix: "+", label: "Miles of Cable", description: "Fiber optic networks deployed" },
  { value: 50, suffix: "M+", label: "Connected Homes", description: "High-speed internet access" },
  { value: 99.99, suffix: "%", label: "Network Uptime", description: "Reliable cable infrastructure" },
  { value: 10, suffix: "Gbps", label: "Fiber Speed", description: "Fastest cable technology" },
];

const CounterAnimation = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const displayValue = value % 1 === 0 
    ? count.toLocaleString() 
    : count.toFixed(2);

  return (
    <span ref={ref} className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary">
      {displayValue}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="text-primary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 block">
            Network Statistics
          </span>
          <h2 className="heading-section text-background">
            Cable & Internet Infrastructure
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center relative"
            >
              <div className="mb-3 sm:mb-4">
                <CounterAnimation value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="font-display text-lg sm:text-xl text-background mb-2">{stat.label}</h3>
              <p className="text-background/50 text-sm">{stat.description}</p>
              
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-background/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
