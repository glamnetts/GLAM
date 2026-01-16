import { motion } from "framer-motion";
import { Leaf, Recycle, Sun, TreeDeciduous } from "lucide-react";
import aerialCables from "@/assets/aerial-cables.jpg";

const initiatives = [
  {
    icon: Sun,
    title: "100% Renewable Energy",
    description: "All data centers powered by solar and wind"
  },
  {
    icon: Recycle,
    title: "Zero Waste Operations",
    description: "95% of materials recycled or repurposed"
  },
  {
    icon: TreeDeciduous,
    title: "Carbon Neutral by 2025",
    description: "Offsetting emissions through reforestation"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Sustainable cable manufacturing processes"
  }
];

const SustainabilitySection = () => {
  return (
    <section className="section-editorial bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              Our Commitment
            </span>
            <h2 className="heading-editorial text-background mb-6">
              Building a Sustainable Future
            </h2>
            <p className="text-background/60 text-lg mb-12">
              We believe in connecting the world responsibly. Our sustainability 
              initiatives ensure that progress doesn't come at the planet's expense.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {initiatives.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-background mb-1">{item.title}</h3>
                    <p className="text-background/50 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={aerialCables} 
                alt="Sustainable infrastructure" 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-primary p-8"
            >
              <p className="font-display text-4xl text-primary-foreground">-40%</p>
              <p className="text-primary-foreground/80 text-sm">Carbon Reduction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
