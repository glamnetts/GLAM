import { motion } from "framer-motion";
import { Server, Globe, Building2, Home, Smartphone } from "lucide-react";

const nodes = [
  { icon: Globe, label: "Internet Backbone", x: "50%", y: "10%" },
  { icon: Server, label: "Data Center", x: "50%", y: "35%" },
  { icon: Building2, label: "Distribution Hub", x: "25%", y: "60%" },
  { icon: Building2, label: "Distribution Hub", x: "75%", y: "60%" },
  { icon: Home, label: "Residential", x: "15%", y: "85%" },
  { icon: Building2, label: "Business", x: "40%", y: "85%" },
  { icon: Smartphone, label: "Mobile", x: "60%", y: "85%" },
  { icon: Home, label: "Residential", x: "85%", y: "85%" },
];

const connections = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 6 },
  { from: 3, to: 7 },
];

const InfrastructureDiagram = () => {
  return (
    <section className="section-editorial bg-foreground text-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Network Architecture
          </span>
          <h2 className="heading-section text-background mb-4">
            How Data Reaches You
          </h2>
          <p className="text-background/60 max-w-2xl mx-auto">
            From global internet backbone to your device, see how our infrastructure 
            delivers seamless connectivity.
          </p>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px]">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {connections.map((conn, i) => {
              const from = nodes[conn.from];
              const to = nodes[conn.to];
              return (
                <motion.line
                  key={i}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                />
              );
            })}
            
            {/* Animated data flow */}
            {connections.map((conn, i) => {
              const from = nodes[conn.from];
              const to = nodes[conn.to];
              return (
                <motion.circle
                  key={`flow-${i}`}
                  r="4"
                  fill="hsl(var(--primary))"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    cx: [from.x, to.x],
                    cy: [from.y, to.y]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: node.x, top: node.y }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-lg cursor-pointer group"
              >
                <node.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              </motion.div>
              <p className="text-center text-xs text-background/60 mt-2 whitespace-nowrap">
                {node.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureDiagram;
