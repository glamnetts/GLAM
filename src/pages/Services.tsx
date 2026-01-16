import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cable, Network, Shield, Wrench, Zap, Globe } from "lucide-react";

const services = [
  {
    icon: Cable,
    title: "Fiber Optic Installation",
    description: "Professional installation of high-speed fiber optic cables for residential and commercial properties. Our certified technicians ensure optimal performance and reliability.",
    features: [
      "Single-mode & multi-mode fiber",
      "Indoor/outdoor installation",
      "Fusion splicing services",
      "Testing & certification"
    ]
  },
  {
    icon: Network,
    title: "Ethernet Solutions",
    description: "Complete ethernet cabling infrastructure for businesses. From Cat5e to Cat8, we provide reliable wired networking solutions tailored to your needs.",
    features: [
      "Structured cabling",
      "Network rack setup",
      "PoE installation",
      "Cable management"
    ]
  },
  {
    icon: Globe,
    title: "Cable Internet Services",
    description: "High-speed cable internet connectivity with speeds up to 10Gbps. Reliable connections backed by 99.9% uptime SLA for homes and businesses.",
    features: [
      "Residential packages",
      "Business solutions",
      "Dedicated bandwidth",
      "24/7 monitoring"
    ]
  },
  {
    icon: Wrench,
    title: "Infrastructure Maintenance",
    description: "Comprehensive maintenance and support services to keep your cable infrastructure running at peak performance. Preventive and corrective maintenance available.",
    features: [
      "Regular inspections",
      "Emergency repairs",
      "Performance optimization",
      "Documentation updates"
    ]
  },
  {
    icon: Shield,
    title: "Network Security",
    description: "Protect your cable infrastructure with advanced security solutions. From physical security to network monitoring, we ensure your data stays safe.",
    features: [
      "Firewall configuration",
      "Intrusion detection",
      "Security audits",
      "Compliance consulting"
    ]
  },
  {
    icon: Zap,
    title: "Upgrade Services",
    description: "Stay ahead with the latest cable technology. We help you upgrade your existing infrastructure to meet growing bandwidth demands.",
    features: [
      "Technology assessment",
      "Migration planning",
      "Minimal downtime",
      "Future-proof solutions"
    ]
  }
];

const Services = () => {
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
            <h1 className="heading-editorial mb-6">Our Services</h1>
            <p className="text-background/70 text-lg md:text-xl max-w-3xl mx-auto">
              Comprehensive cable and internet solutions for residential and commercial customers. 
              From installation to maintenance, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-editorial bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-editorial bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-editorial mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us today to discuss your cable infrastructure needs and get a free consultation.
            </p>
            <Link 
              to="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
