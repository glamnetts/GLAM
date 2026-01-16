import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/hero-fiber-flow.mp4";

const AnimatedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.1]);
  const textY = useTransform(scrollY, [0, 400], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.5 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const title1 = "Advanced Fiber Optic";
  const title2 = "Cable Solutions";

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity }}
      className="section-full flex items-center justify-center bg-foreground relative pt-24 sm:pt-28 md:pt-32 lg:pt-40"
    >
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          scale,
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-cover opacity-40"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/5" />
      </motion.div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      {/* Geometric Shapes - Redesigned */}
      <motion.div
        className="absolute top-20 right-10 w-24 h-24 md:w-40 md:h-40 border-2 border-primary/30 hidden sm:block"
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 right-1/3 w-16 h-16 md:w-32 md:h-32 border border-primary/20 rounded-full hidden md:block"
        animate={{ 
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating Network Nodes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/60 rounded-full hidden lg:block"
          style={{
            left: `${10 + (i * 7)}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 2 + (i % 3),
            delay: i * 0.2,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Main Content - New Grid Layout */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 items-center">
            
            {/* Main Content - Full Width */}
            <motion.div 
              className="text-center lg:text-left"
              style={{ y: textY }}
            >
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 sm:mb-8"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-white text-xs sm:text-sm tracking-wider uppercase font-medium">
                  Next Generation Cable Technology
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="heading-hero text-background mb-6"
              >
                <span className="block mb-2 whitespace-nowrap">
                  {title1.split("").map((char, i) => (
                    <motion.span key={i} variants={letterVariants} className="inline-block">
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
                <span className="block text-primary whitespace-nowrap">
                  {title2.split("").map((char, i) => (
                    <motion.span key={i} variants={letterVariants} className="inline-block">
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="text-background/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10"
              >
                Deploy cutting-edge fiber optic cables and ethernet infrastructure for ultra-fast internet connectivity. 
                From submarine cables to home installations, we power the digital world.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <Link 
                  to="/services"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 text-center"
                >
                  Explore Services
                </Link>
                <Link 
                  to="/solutions"
                  className="px-8 py-4 bg-background/10 text-background border border-background/20 rounded-lg font-semibold hover:bg-background/20 transition-all backdrop-blur-sm text-center"
                >
                  View Solutions
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator - Redesigned */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-background/60 hover:text-primary transition-colors group"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2"
        >
          <motion.div 
            className="w-1 h-2 bg-current rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.button>
    </motion.section>
  );
};

export default AnimatedHero;
