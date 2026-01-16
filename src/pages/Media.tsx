import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PressSection from "@/components/sections/PressSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import fiberOpticGlow from "@/assets/fiber-optic-glow.jpg";
import submarineCable from "@/assets/submarine-cable.jpg";
import dataCenter from "@/assets/data-center.jpg";
import cableTechnician from "@/assets/cable-technician.jpg";
import networkHardware from "@/assets/network-hardware.jpg";
import cableBundle from "@/assets/cable-bundle.jpg";
import networkVisualization from "@/assets/network-visualization.mp4";
import cableInstallation from "@/assets/cable-installation.mp4";

const mediaItems = [
  { type: "image", src: fiberOpticGlow, title: "Fiber Optic Technology" },
  { type: "video", src: networkVisualization, title: "Network Visualization" },
  { type: "image", src: submarineCable, title: "Submarine Cable Systems" },
  { type: "image", src: dataCenter, title: "Data Center Operations" },
  { type: "video", src: cableInstallation, title: "Cable Installation" },
  { type: "image", src: cableTechnician, title: "Expert Technicians" },
  { type: "image", src: networkHardware, title: "Network Hardware" },
  { type: "image", src: cableBundle, title: "Cable Infrastructure" },
];

const Media = () => {
  return (
    <Layout>
      <section className="min-h-[50vh] flex items-end px-6 md:px-12 lg:px-20 pb-20 pt-40">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-small text-primary mb-6 block"
          >
            Media
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-hero"
          >
            Visual Stories
          </motion.h1>
        </div>
      </section>

      <PressSection />

      <section className="section-editorial bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-editorial text-center mb-12"
          >
            Gallery
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden image-hover-zoom mb-4 rounded-lg max-w-sm">
                  {item.type === "image" ? (
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ResourcesSection />
    </Layout>
  );
};

export default Media;
