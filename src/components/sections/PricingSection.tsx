import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    speed: "100 Mbps",
    price: "49",
    features: [
      "Unlimited data",
      "Free WiFi router",
      "24/7 support",
      "Standard installation"
    ],
    popular: false
  },
  {
    name: "Pro",
    speed: "500 Mbps",
    price: "79",
    features: [
      "Unlimited data",
      "Premium WiFi 6 router",
      "Priority 24/7 support",
      "Free installation",
      "Static IP option"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    speed: "1 Gbps",
    price: "129",
    features: [
      "Unlimited data",
      "Enterprise mesh system",
      "Dedicated support line",
      "White glove installation",
      "Multiple static IPs",
      "SLA guarantee"
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="section-editorial bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Plans & Pricing
          </span>
          <h2 className="heading-section mb-4">
            Choose Your Speed
          </h2>
          <p className="text-editorial max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All plans include unlimited data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-background p-8 ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-display flex items-center gap-2">
                  <Zap size={14} />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl mb-2">{plan.name}</h3>
                <p className="text-primary font-display text-lg">{plan.speed}</p>
              </div>

              <div className="text-center mb-8">
                <span className="font-display text-5xl">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="text-primary flex-shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 font-display tracking-wide transition-colors duration-300 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-foreground"
                    : "bg-foreground text-background hover:bg-primary"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
