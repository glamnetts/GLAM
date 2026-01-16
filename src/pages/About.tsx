import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import AwardsSection from "@/components/sections/AwardsSection";
import SustainabilitySection from "@/components/sections/SustainabilitySection";
import cableManufacturing from "@/assets/cable-manufacturing.jpg";

const About = () => {
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
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-hero"
          >
            Building the Backbone
            <br />
            <span className="text-muted-foreground">Of Connectivity</span>
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-editorial">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="heading-editorial mb-8">Our Story</h2>
              <p className="text-editorial mb-6">
                Founded with a vision to revolutionize cable and internet infrastructure, 
                GLAM NET has grown from a regional fiber optic cable provider to a leader 
                in high-speed internet connectivity solutions.
              </p>
              <p className="text-editorial">
                Today, our fiber optic cable network spans continents, delivering ultra-fast internet 
                to millions of homes and businesses. From submarine cables crossing oceans to the last-mile 
                ethernet connections in your neighborhood, we build and maintain the physical infrastructure 
                that powers the digital world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary p-8">
                <p className="font-display text-4xl text-primary mb-2">750K+</p>
                <p className="text-sm text-muted-foreground">Miles of Cable</p>
              </div>
              <div className="bg-secondary p-8">
                <p className="font-display text-4xl text-primary mb-2">10Gbps</p>
                <p className="text-sm text-muted-foreground">Fiber Speed</p>
              </div>
              <div className="bg-secondary p-8">
                <p className="font-display text-4xl text-primary mb-2">30+</p>
                <p className="text-sm text-muted-foreground">Countries Served</p>
              </div>
              <div className="bg-secondary p-8">
                <p className="font-display text-4xl text-primary mb-2">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime SLA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto aspect-[21/9] overflow-hidden"
        >
          <img src={cableManufacturing} alt="Cable infrastructure operations" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      <AwardsSection />
      <SustainabilitySection />

      {/* Values */}
      <section className="section-editorial bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-section text-background mb-16"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Innovation", desc: "Constantly pushing the boundaries of fiber optic cable technology and internet infrastructure." },
              { title: "Reliability", desc: "Building cable infrastructure that communities can depend on for ultra-fast internet, 24/7." },
              { title: "Sustainability", desc: "Committed to environmentally responsible cable installation and network solutions." },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-display text-2xl text-background mb-4">{value.title}</h3>
                <p className="text-background/60">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
