import { motion } from "framer-motion";
import { Check, Zap, Shield, Crown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: "49",
    icon: Zap,
    features: ["Unlimited data", "Free WiFi router", "24/7 support"],
    popular: false
  },
  {
    name: "Pro",
    speed: "500 Mbps",
    price: "79",
    icon: Shield,
    features: ["Unlimited data", "WiFi 6 router", "Priority support", "Static IP"],
    popular: true
  },
  {
    name: "Enterprise",
    speed: "1 Gbps",
    price: "129",
    icon: Crown,
    features: ["Unlimited data", "Mesh WiFi", "Dedicated support", "99.9% SLA"],
    popular: false
  }
];

const PlansHomeSection = () => {
  return (
    <section className="section-editorial bg-gradient-to-br from-secondary to-secondary/80">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-editorial mb-6">Internet Plans</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect speed for your home or business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-background rounded-2xl p-8 border-2 ${
                  plan.popular ? "border-primary shadow-xl scale-105" : "border-border"
                } transition-all hover:shadow-2xl group`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60 font-semibold mb-4">{plan.speed}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">${plan.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary border-2 border-border hover:border-primary"
                  }`}
                >
                  Choose Plan
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/plans">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg group">
              View All Plans
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansHomeSection;
