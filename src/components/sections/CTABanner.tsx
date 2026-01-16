import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-5" />
      
      {/* Animated Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary text-sm tracking-[0.3em] uppercase mb-6 block"
        >
          Ready to Connect?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="heading-section text-background mb-6"
        >
          Check Availability in Your Area
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-background/60 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Enter your address to see available plans and speeds. 
          Installation can be scheduled as early as this week.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-display tracking-wide hover:bg-background hover:text-foreground transition-colors duration-300 group"
          >
            Get Started
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/solutions"
            className="inline-flex items-center justify-center gap-2 border border-background/30 text-background px-8 py-4 font-display tracking-wide hover:border-primary hover:text-primary transition-colors duration-300"
          >
            View Plans
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
