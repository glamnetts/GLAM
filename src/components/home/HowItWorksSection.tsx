import { motion } from "framer-motion";
import { Network, Wifi, Zap } from "lucide-react";

const steps = [
  {
    icon: Network,
    step: "01",
    title: "Cable Installation",
    description: "We deploy state-of-the-art fiber optic and ethernet cables, creating high-speed network infrastructure from the ground up."
  },
  {
    icon: Wifi,
    step: "02",
    title: "Network Connection",
    description: "Our advanced cable systems connect homes and businesses to ultra-fast internet with minimal latency and maximum reliability."
  },
  {
    icon: Zap,
    step: "03",
    title: "High-Speed Internet",
    description: "Experience lightning-fast fiber optic internet for streaming, gaming, and business operations that never compromise on speed."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="section-editorial bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Cable Deployment Process
          </span>
          <h2 className="heading-section">
            How We Connect You
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <motion.div 
            className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-border"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                {/* Icon Circle */}
                <motion.div 
                  className="w-20 h-20 mx-auto bg-background rounded-full flex items-center justify-center mb-8 shadow-lg relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Step Number */}
                <motion.span 
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-8xl font-display text-border/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  {item.step}
                </motion.span>

                <h3 className="font-display text-2xl mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
