import { motion } from "framer-motion";

const comparisons = [
  { provider: "Traditional Cable", speed: 150, color: "bg-muted-foreground/30" },
  { provider: "DSL", speed: 50, color: "bg-muted-foreground/20" },
  { provider: "Satellite", speed: 25, color: "bg-muted-foreground/10" },
  { provider: "Our Fiber", speed: 1000, color: "bg-primary" },
];

const activities = [
  { name: "4K Streaming", requirement: 25 },
  { name: "Video Conferencing", requirement: 10 },
  { name: "Online Gaming", requirement: 50 },
  { name: "Large File Downloads", requirement: 100 },
];

const SpeedComparison = () => {
  const maxSpeed = Math.max(...comparisons.map(c => c.speed));

  return (
    <section className="section-editorial">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Speed Comparison
          </span>
          <h2 className="heading-section mb-4">
            The Fiber Advantage
          </h2>
          <p className="text-editorial max-w-2xl mx-auto">
            See how our fiber network outperforms traditional internet technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Speed Bars */}
          <div className="space-y-8">
            <h3 className="font-display text-2xl mb-8">Average Speeds (Mbps)</h3>
            {comparisons.map((item, index) => (
              <motion.div
                key={item.provider}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className={item.provider === "Our Fiber" ? "font-display text-primary" : "text-muted-foreground"}>
                    {item.provider}
                  </span>
                  <span className={item.provider === "Our Fiber" ? "font-display text-primary" : "text-muted-foreground"}>
                    {item.speed} Mbps
                  </span>
                </div>
                <div className="h-4 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${item.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.speed / maxSpeed) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Activity Requirements */}
          <div>
            <h3 className="font-display text-2xl mb-8">What You Can Do</h3>
            <div className="bg-secondary p-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-display">Activity</th>
                    <th className="text-right py-3 font-display">Required</th>
                    <th className="text-right py-3 font-display">Our Speed</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((activity, index) => (
                    <motion.tr
                      key={activity.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="border-b border-border/50"
                    >
                      <td className="py-4">{activity.name}</td>
                      <td className="text-right text-muted-foreground">{activity.requirement} Mbps</td>
                      <td className="text-right text-primary font-display">
                        {Math.floor(1000 / activity.requirement)}x faster
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedComparison;
