import { motion } from "framer-motion";
import cableTechnician from "@/assets/cable-technician.jpg";
import networkOpsCenter from "@/assets/network-ops-center.jpg";
import dataCenter from "@/assets/data-center.jpg";

const team = [
  {
    name: "Alexandra Chen",
    role: "Chief Executive Officer",
    image: networkOpsCenter,
    bio: "20+ years in telecommunications"
  },
  {
    name: "Marcus Williams",
    role: "Chief Technology Officer",
    image: dataCenter,
    bio: "Former Lead Architect at major telecom"
  },
  {
    name: "Sarah Martinez",
    role: "VP of Operations",
    image: cableTechnician,
    bio: "Expert in network infrastructure"
  }
];

const TeamSection = () => {
  return (
    <section className="section-editorial">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Leadership
          </span>
          <h2 className="heading-section">
            Meet Our Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] overflow-hidden image-hover-zoom mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-xl mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary text-sm mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
