import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import serviceInfrastructure from "@/assets/service-infrastructure.jpg";
import serviceConnectivity from "@/assets/service-connectivity.jpg";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceCommunication from "@/assets/service-communication.jpg";

const services = [
  {
    title: "Fiber Optic Cable Installation",
    description: "Professional fiber optic cable deployment for ultra-high-speed internet connections",
    image: serviceInfrastructure,
  },
  {
    title: "Ethernet Network Cabling",
    description: "Complete Cat6 and Cat7 ethernet cabling solutions for homes and offices",
    image: serviceConnectivity,
  },
  {
    title: "Cable Internet Services",
    description: "High-speed cable internet with gigabit speeds and 99.99% uptime reliability",
    image: serviceNetwork,
  },
  {
    title: "Cable Infrastructure Maintenance",
    description: "Professional maintenance and repair of cable networks for optimal performance",
    image: serviceCommunication,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-editorial bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-small text-primary mb-6 block">Cable & Internet Services</span>
          <h2 className="heading-section max-w-3xl">
            Complete cable infrastructure and internet solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6 image-hover-zoom">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>
              <h3 className="font-display text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
