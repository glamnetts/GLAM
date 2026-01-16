import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const footerLinks = {
  services: [
    { label: "Fiber Optic Installation", href: "/services" },
    { label: "Cable Internet", href: "/services" },
    { label: "Ethernet Solutions", href: "/services" },
    { label: "Network Infrastructure", href: "/services" },
  ],
  plans: [
    { label: "Basic Plan", href: "/plans" },
    { label: "Pro Plan", href: "/plans" },
    { label: "Enterprise Plan", href: "/plans" },
    { label: "Ultra Plan", href: "/plans" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-background relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 tech-grid" />
      </div>

      {/* Fiber Wave Animation */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20">
          {/* Top Section with Logo and Info */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Logo variant="light" size="lg" />
                <p className="text-background/70 text-base mt-6 max-w-md leading-relaxed">
                  Powering the future with cutting-edge fiber optic cable technology 
                  and ultra-fast internet connectivity solutions.
                </p>
                
                {/* Contact Info */}
                <div className="mt-8 space-y-3">
                  <a href="mailto:contact@glamnet.com" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>contact@glamnet.com</span>
                  </a>
                  <a href="tel:1-800-GLAM-NET" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>1-800-GLAM-NET</span>
                  </a>
                  <div className="flex items-center gap-3 text-background/80">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span>123 Fiber Optic Lane, Tech City, TC 12345</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="bg-background/5 backdrop-blur-sm rounded-lg p-6 border border-background/10">
                  <div className="text-2xl font-bold text-primary mb-2">750K+</div>
                  <div className="text-sm text-background/70">Miles of Cable</div>
                </div>
                <div className="bg-background/5 backdrop-blur-sm rounded-lg p-6 border border-background/10">
                  <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-background/70">Uptime SLA</div>
                </div>
                <div className="bg-background/5 backdrop-blur-sm rounded-lg p-6 border border-background/10">
                  <div className="text-2xl font-bold text-primary mb-2">10Gbps</div>
                  <div className="text-sm text-background/70">Max Speed</div>
                </div>
                <div className="bg-background/5 backdrop-blur-sm rounded-lg p-6 border border-background/10">
                  <div className="text-2xl font-bold text-primary mb-2">50M+</div>
                  <div className="text-sm text-background/70">Connected</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary">
                  Services
                </h4>
                <ul className="space-y-2">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-background/70 hover:text-background transition-colors duration-300 text-sm inline-block hover:translate-x-1 transition-transform"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Plans */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary">
                  Plans
                </h4>
                <ul className="space-y-2">
                  {footerLinks.plans.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-background/70 hover:text-background transition-colors duration-300 text-sm inline-block hover:translate-x-1 transition-transform"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary">
                  Company
                </h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-background/70 hover:text-background transition-colors duration-300 text-sm inline-block hover:translate-x-1 transition-transform"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary">
                  Legal
                </h4>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-background/70 hover:text-background transition-colors duration-300 text-sm inline-block hover:translate-x-1 transition-transform"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8">
            <div className="max-w-7xl mx-auto text-center">
              <motion.p 
                className="text-background/60 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                © {new Date().getFullYear()} GLAM NET. All rights reserved. | Connecting the world through fiber optic excellence.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
