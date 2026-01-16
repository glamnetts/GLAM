import { motion } from "framer-motion";
import { ClipboardCheck, Calendar, Truck, Wifi } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Check Availability",
    description: "Enter your address to verify coverage and see available plans in your area.",
    time: "2 minutes"
  },
  {
    icon: Calendar,
    title: "Schedule Installation",
    description: "Choose a convenient date and time. We offer same-week appointments.",
    time: "1 day"
  },
  {
    icon: Truck,
    title: "Professional Setup",
    description: "Our certified technicians handle everything, from cabling to router configuration.",
    time: "2-4 hours"
  },
  {
    icon: Wifi,
    title: "Get Connected",
    description: "Start enjoying blazing-fast internet with our 30-day satisfaction guarantee.",
    time: "Instant"
  }
];

const ProcessTimeline = () => {
  return (
    <section className="section-editorial">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Installation Process
          </span>
          <h2 className="heading-section">
            From Signup to Connected
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ originY: 0 }}
          />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 w-16 h-16 bg-background border-2 border-primary rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <step.icon className="w-6 h-6 text-primary" />
                </motion.div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                  <span className="text-primary text-sm font-display">{step.time}</span>
                  <h3 className="font-display text-2xl mt-2 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground max-w-md">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
