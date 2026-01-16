import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const leftNavLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/plans", label: "Plans" },
];

const rightNavLinks = [
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const allNavLinks = [...leftNavLinks, ...rightNavLinks];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Check if current page is home page
  const isHomePage = location.pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform ${
          isScrolled || !isHomePage
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="relative flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-5 md:py-6 max-w-[1600px] mx-auto">
          
          {/* Left Navigation */}
          <motion.div 
            className="hidden lg:flex items-center gap-16 xl:gap-20 2xl:gap-24 flex-1 justify-end pr-12 xl:pr-16"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {leftNavLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className={`text-sm tracking-wide transition-all duration-300 relative group ${
                    isScrolled || !isHomePage
                      ? "text-foreground hover:text-primary"
                      : "text-background/90 hover:text-background"
                  } ${location.pathname === link.href ? "font-semibold" : ""}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.href ? "w-full" : ""
                  }`} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
            className="relative z-10 flex-shrink-0"
          >
            <Link to="/" className="block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Logo 
                  variant={isScrolled || !isHomePage ? "dark" : "light"} 
                  size="md"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Right Navigation */}
          <motion.div 
            className="hidden lg:flex items-center gap-16 xl:gap-20 2xl:gap-24 flex-1 justify-start pl-12 xl:pl-16"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {rightNavLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className={`text-sm tracking-wide transition-all duration-300 relative group ${
                    isScrolled || !isHomePage
                      ? "text-foreground hover:text-primary"
                      : "text-background/90 hover:text-background"
                  } ${location.pathname === link.href ? "font-semibold" : ""}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.href ? "w-full" : ""
                  }`} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 transition-colors duration-300 p-2 ${
              isScrolled || !isHomePage ? "text-foreground" : "text-background"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-8 px-6">
              {allNavLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={`text-2xl sm:text-3xl font-display tracking-tight ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
