import { motion } from "framer-motion";
import connectedCity from "@/assets/connected-city.jpg";

const regions = [
  { name: "North America", coverage: "98%", cities: 450 },
  { name: "Europe", coverage: "95%", cities: 380 },
  { name: "Asia Pacific", coverage: "87%", cities: 520 },
  { name: "Latin America", coverage: "76%", cities: 210 },
];

const CoverageSection = () => {
  return (
    <section className="section-editorial">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden image-hover-zoom">
              <img 
                src={connectedCity} 
                alt="Global network coverage" 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8"
            >
              <p className="font-display text-4xl">30+</p>
              <p className="text-sm opacity-80">Countries</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              Coverage Area
            </span>
            <h2 className="heading-editorial mb-6">
              Connecting the World
            </h2>
            <p className="text-editorial mb-12">
              Our extensive network spans across continents, bringing high-speed 
              internet to millions of homes and businesses worldwide.
            </p>

            <div className="space-y-6">
              {regions.map((region, index) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-display text-lg group-hover:text-primary transition-colors">
                      {region.name}
                    </h4>
                    <span className="text-muted-foreground text-sm">
                      {region.cities} cities
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: region.coverage }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
