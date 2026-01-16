import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PricingSection from "@/components/sections/PricingSection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CTABanner from "@/components/sections/CTABanner";
import fiberOpticGlow from "@/assets/fiber-optic-glow.jpg";
import dataCenter from "@/assets/data-center.jpg";
import networkHardware from "@/assets/network-hardware.jpg";
import homeRouter from "@/assets/home-router.jpg";

const solutions = [
  {
    title: "Fiber Optic Cable Infrastructure",
    description: "We design and deploy fiber optic cable networks that form the backbone of high-speed internet connectivity. From long-haul submarine cables to last-mile installations, our cable infrastructure solutions enable ultra-fast data transmission worldwide.",
    image: fiberOpticGlow,
    features: ["Fiber optic cable installation", "Underground cable systems", "Aerial cable deployment", "Cable maintenance & repair"],
  },
  {
    title: "High-Speed Cable Internet",
    description: "Delivering ultra-fast internet over our fiber optic and coaxial cable networks with speeds up to 10 Gbps. Our cable internet services are designed for reliability, performance, and scalability for homes and businesses.",
    image: homeRouter,
    features: ["Residential cable internet", "Business fiber connections", "Ethernet solutions", "Dedicated internet access"],
  },
  {
    title: "Enterprise Cable Network Solutions",
    description: "Enterprise-grade structured cabling and network infrastructure designed for demanding environments. We build and manage ethernet cable networks that scale with your business, from Cat5e to Cat8 installations.",
    image: networkHardware,
    features: ["Structured cabling", "Network optimization", "Cable testing & certification", "24/7 cable network monitoring"],
  },
  {
    title: "Data Centers",
    description: "State-of-the-art data center facilities with redundant power, cooling, and connectivity to ensure your services stay online.",
    image: dataCenter,
    features: ["Colocation services", "Managed hosting", "Cloud connectivity", "Disaster recovery"],
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-end px-6 md:px-12 lg:px-20 pb-20 pt-40">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-small text-primary mb-6 block"
          >
            Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-hero"
          >
            Cable & Internet Solutions
            <br />
            <span className="text-muted-foreground">For Every Need</span>
          </motion.h1>
        </div>
      </section>

      {/* Solutions List */}
      {solutions.map((solution, index) => (
        <section key={solution.title} className={`py-20 md:py-32 ${index % 2 === 1 ? 'bg-secondary' : ''}`}>
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="aspect-video overflow-hidden image-hover-zoom rounded-lg max-w-md">
                  <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <h2 className="heading-editorial mb-6">{solution.title}</h2>
                <p className="text-editorial mb-8">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <PricingSection />
      <ProcessTimeline />
      <CTABanner />
    </Layout>
  );
};

export default Solutions;
