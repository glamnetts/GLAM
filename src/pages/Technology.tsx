import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import InfrastructureDiagram from "@/components/sections/InfrastructureDiagram";
import SpeedComparison from "@/components/sections/SpeedComparison";
import connectedCity from "@/assets/connected-city.jpg";
import networkVisualization from "@/assets/network-visualization.mp4";

const techCapabilities = [
  { title: "Fiber Optic Cable Networks", desc: "Ultra-fast data transmission via glass fiber" },
  { title: "Coaxial Cable Infrastructure", desc: "Reliable cable internet backbone" },
  { title: "Ethernet Cable Solutions", desc: "Cat5e to Cat8 structured cabling" },
  { title: "Cable Internet Services", desc: "High-speed internet delivery" },
  { title: "Submarine Cable Systems", desc: "Transoceanic data transmission" },
  { title: "Cable Network Management", desc: "Intelligent cable infrastructure monitoring" },
];

const Technology = () => {
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
            Technology
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-hero"
          >
            Cable & Internet Technology
            <br />
            <span className="text-muted-foreground">Powering Connectivity</span>
          </motion.h1>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-video">
        <video autoPlay muted loop playsInline className="video-cover">
          <source src={networkVisualization} type="video/mp4" />
        </video>
      </section>

      {/* Tech Grid */}
      <section className="section-editorial">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 max-w-2xl"
          >
            <h2 className="heading-section mb-6">Our Cable & Internet Technology</h2>
            <p className="text-editorial">
              We leverage cutting-edge fiber optic cable technology and advanced internet infrastructure 
              to deliver reliable, high-performance connectivity solutions that meet the demands of modern digital life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {techCapabilities.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-10 group hover:bg-secondary transition-colors duration-300"
              >
                <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground text-sm">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InfrastructureDiagram />
      <SpeedComparison />

      {/* Image Feature */}
      <section className="section-editorial bg-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={connectedCity}
            alt="Connected city"
            className="w-full aspect-square object-cover"
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="heading-editorial mb-6">Smart City Integration</h2>
            <p className="text-editorial mb-8">
              Our infrastructure powers smart city initiatives worldwide, enabling 
              connected transportation, utilities, and public services.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-display text-4xl text-primary">200+</p>
                <p className="text-sm text-muted-foreground">Cities Connected</p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary">1M+</p>
                <p className="text-sm text-muted-foreground">IoT Devices</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
