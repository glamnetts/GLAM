import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    city: "San Francisco",
    address: "123 Network Avenue, CA 94102",
    phone: "+1 (415) 555-0100",
    hours: "Mon-Fri: 9AM-6PM"
  },
  {
    city: "New York",
    address: "456 Data Center Way, NY 10001",
    phone: "+1 (212) 555-0100",
    hours: "Mon-Fri: 9AM-6PM"
  },
  {
    city: "London",
    address: "789 Fiber Lane, EC2A 4BX",
    phone: "+44 20 7946 0100",
    hours: "Mon-Fri: 9AM-5PM GMT"
  },
  {
    city: "Singapore",
    address: "101 Connect Street, 018956",
    phone: "+65 6123 4567",
    hours: "Mon-Fri: 9AM-6PM SGT"
  }
];

const LocationsSection = () => {
  return (
    <section className="section-editorial bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Global Presence
          </span>
          <h2 className="heading-section">
            Our Offices
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 group hover:shadow-lg transition-shadow"
            >
              <h3 className="font-display text-2xl mb-6 group-hover:text-primary transition-colors">
                {location.city}
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{location.address}</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{location.phone}</span>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{location.hours}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
