import { motion } from "framer-motion";
import { Cable, Network, Shield, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Cable,
    title: "Fiber Optic Installation",
    description: "Professional fiber optic cable installation with certified technicians and guaranteed performance.",
    color: "from-cyan-500/10 to-blue-500/10"
  },
  {
    icon: Network,
    title: "Ethernet Solutions",
    description: "Complete structured cabling for businesses, from Cat5e to Cat8 installation and management.",
    color: "from-blue-500/10 to-purple-500/10"
  },
  {
    icon: Shield,
    title: "Network Security",
    description: "Advanced security solutions to protect your cable infrastructure and sensitive data.",
    color: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "24/7 monitoring and maintenance services to keep your network running at peak performance.",
    color: "from-pink-500/10 to-red-500/10"
  }
];

const ServicesHomeSection = () => {
  return (
    <section className="section-editorial bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-editorial mb-6">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive cable and internet solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${service.color} rounded-xl p-6 border border-border hover:shadow-xl transition-all group cursor-pointer`}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
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
          <Link to="/services">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg group">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHomeSection;
