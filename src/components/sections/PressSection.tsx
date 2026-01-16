import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pressReleases = [
  {
    date: "January 10, 2024",
    title: "GLAM NEST Announces Expansion to 15 New Markets",
    excerpt: "The company will bring fiber optic service to an additional 2 million homes by end of year."
  },
  {
    date: "December 5, 2023",
    title: "Q3 2023 Financial Results Exceed Expectations",
    excerpt: "Revenue growth of 35% year-over-year driven by residential expansion."
  },
  {
    date: "November 18, 2023",
    title: "Partnership with Major Cloud Provider Announced",
    excerpt: "Collaboration will deliver enhanced cloud connectivity for enterprise customers."
  },
  {
    date: "October 2, 2023",
    title: "Sustainability Report: Carbon Neutral Operations Achieved",
    excerpt: "Company reaches milestone five years ahead of schedule through renewable energy investments."
  }
];

const PressSection = () => {
  return (
    <section className="section-editorial">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              Press Releases
            </span>
            <h2 className="heading-editorial">
              Latest News
            </h2>
          </div>
          <Link 
            to="/media"
            className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="space-y-8">
          {pressReleases.map((release, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-border pb-8 last:border-0 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar size={14} />
                {release.date}
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
                {release.title}
              </h3>
              <p className="text-muted-foreground">{release.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
