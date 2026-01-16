import { motion } from "framer-motion";
import { Award, Star, Shield, Zap } from "lucide-react";

const awards = [
  {
    icon: Award,
    year: "2024",
    title: "Best Fiber Provider",
    org: "Telecom Excellence Awards"
  },
  {
    icon: Star,
    year: "2023",
    title: "Customer Choice Award",
    org: "Consumer Reports"
  },
  {
    icon: Shield,
    year: "2023",
    title: "Most Reliable Network",
    org: "Industry Standards Board"
  },
  {
    icon: Zap,
    year: "2022",
    title: "Innovation Award",
    org: "Tech Forward Conference"
  }
];

const AwardsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Recognition
          </span>
          <h2 className="heading-editorial">
            Awards & Accolades
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 text-center group hover:shadow-lg transition-shadow"
            >
              <award.icon className="w-10 h-10 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-primary text-sm font-display">{award.year}</span>
              <h3 className="font-display text-lg mt-2 mb-1">{award.title}</h3>
              <p className="text-muted-foreground text-xs">{award.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
