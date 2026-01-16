import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Crown } from "lucide-react";

const plans = [
  {
    name: "Basic",
    speed: "100 Mbps",
    price: "49",
    icon: Zap,
    description: "Perfect for browsing and streaming",
    features: [
      "100 Mbps download speed",
      "10 Mbps upload speed",
      "Unlimited data",
      "Free WiFi router",
      "24/7 customer support",
      "Standard installation",
      "1 connected device"
    ],
    popular: false,
    color: "from-blue-500/10 to-blue-600/10"
  },
  {
    name: "Pro",
    speed: "500 Mbps",
    price: "79",
    icon: Shield,
    description: "Ideal for families and remote work",
    features: [
      "500 Mbps download speed",
      "50 Mbps upload speed",
      "Unlimited data",
      "Premium WiFi 6 router",
      "Priority 24/7 support",
      "Free installation",
      "Static IP option",
      "Up to 5 devices",
      "Basic security suite"
    ],
    popular: true,
    color: "from-primary/10 to-primary/20"
  },
  {
    name: "Enterprise",
    speed: "1 Gbps",
    price: "129",
    icon: Crown,
    description: "Ultimate performance for businesses",
    features: [
      "1 Gbps download speed",
      "100 Mbps upload speed",
      "Unlimited data",
      "Enterprise mesh WiFi",
      "Dedicated support line",
      "White glove installation",
      "Multiple static IPs",
      "99.9% uptime SLA",
      "Unlimited devices",
      "Advanced security",
      "Free equipment upgrade"
    ],
    popular: false,
    color: "from-purple-500/10 to-purple-600/10"
  },
  {
    name: "Ultra",
    speed: "10 Gbps",
    price: "299",
    icon: Crown,
    description: "Next-gen fiber for data centers",
    features: [
      "10 Gbps symmetrical speed",
      "Unlimited data transfer",
      "Dedicated fiber line",
      "Enterprise-grade equipment",
      "24/7 NOC monitoring",
      "Same-day support response",
      "Custom IP allocation",
      "99.99% uptime SLA",
      "Unlimited devices",
      "DDoS protection",
      "Managed services option"
    ],
    popular: false,
    color: "from-amber-500/10 to-amber-600/10"
  }
];

const Plans = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-editorial bg-gradient-to-br from-foreground to-foreground/95 text-background relative overflow-hidden pt-32">
        <div className="absolute inset-0 tech-grid opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="heading-editorial mb-6">Internet Plans</h1>
            <p className="text-background/70 text-lg md:text-xl max-w-3xl mx-auto">
              Choose the perfect internet plan for your needs. From home browsing to enterprise solutions, 
              we have the speed and reliability you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="section-editorial bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-gradient-to-br ${plan.color} rounded-2xl p-8 border-2 ${
                    plan.popular ? "border-primary shadow-xl scale-105" : "border-border"
                  } transition-all hover:shadow-2xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-foreground/60 font-semibold mt-2">{plan.speed}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-background border-2 border-border hover:border-primary"
                    }`}
                  >
                    Choose Plan
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="section-editorial bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-6">Need Help Choosing?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold mb-3">Residential Users</h3>
                <p className="text-muted-foreground">
                  Basic plan for light browsing, Pro for streaming and gaming, Ultra for smart homes
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Business Users</h3>
                <p className="text-muted-foreground">
                  Pro for small offices, Enterprise for growing businesses, Ultra for data centers
                </p>
              </div>
            </div>
            <Link 
              to="/contact"
              className="block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all text-center"
            >
              Talk to Sales
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Plans;
