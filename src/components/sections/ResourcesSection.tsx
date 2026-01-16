import { motion } from "framer-motion";
import { Download, FileText, BookOpen, Video } from "lucide-react";

const resources = [
  {
    icon: FileText,
    type: "PDF",
    title: "Company Overview",
    size: "2.4 MB"
  },
  {
    icon: BookOpen,
    type: "PDF",
    title: "Technical Specifications",
    size: "5.1 MB"
  },
  {
    icon: FileText,
    type: "PDF",
    title: "Sustainability Report 2023",
    size: "3.8 MB"
  },
  {
    icon: Video,
    type: "Video",
    title: "Corporate Presentation",
    size: "45 MB"
  }
];

const ResourcesSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Downloads
          </span>
          <h2 className="heading-editorial">
            Resources
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 bg-background p-6 group hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <resource.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-display group-hover:text-primary transition-colors">{resource.title}</h4>
                <p className="text-muted-foreground text-sm">{resource.type} • {resource.size}</p>
              </div>
              <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
