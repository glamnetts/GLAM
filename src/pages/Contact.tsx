import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import LocationsSection from "@/components/sections/LocationsSection";
import QuickFAQ from "@/components/sections/QuickFAQ";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-end px-6 md:px-12 lg:px-20 pb-20 pt-40">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-small text-primary mb-6 block"
          >
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-hero"
          >
            Get in Touch
          </motion.h1>
        </div>
      </section>

      <QuickFAQ />

      {/* Contact Form & Info */}
      <section className="section-editorial">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-editorial mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2 text-muted-foreground">Subject</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-muted-foreground">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <button
                type="submit"
                className="bg-foreground text-background px-8 py-4 font-display tracking-wide hover:bg-primary transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-12"
          >
            <h2 className="heading-editorial mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-display text-lg mb-1">Headquarters</h3>
                  <p className="text-muted-foreground">
                    123 Network Avenue<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-display text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-display text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@glamnet.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-secondary">
              <h3 className="font-display text-xl mb-4">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday – Friday: 9:00 AM – 6:00 PM<br />
                Saturday: 10:00 AM – 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <LocationsSection />
    </Layout>
  );
};

export default Contact;
