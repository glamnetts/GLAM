import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-full flex items-center justify-center relative pt-24 sm:pt-28 md:pt-32 lg:pt-40">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      
      {/* Animated light beam effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(var(--primary)) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Content - New Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            {/* Small Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Industry Leading Technology
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="heading-hero text-background leading-tight">
                <span className="block">Fiber Optic</span>
                <span className="block text-primary mt-2 sm:mt-4">Cable Excellence</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-background/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mt-6 sm:mt-8"
            >
              Delivering ultra-high-speed cable internet and advanced fiber optic infrastructure. 
              Connect to the future with 10Gbps speeds and 99.9% reliability.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 justify-center lg:justify-start"
            >
              <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2">
                Get Started
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="px-8 py-4 bg-background/5 text-background border-2 border-background/30 rounded-lg font-bold hover:bg-background/10 transition-all backdrop-blur-sm">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:grid grid-cols-2 gap-6 auto-rows-max"
          >
            {[
              { 
                number: "750K+", 
                label: "Miles of Cable", 
                desc: "Deployed worldwide",
                gradient: "from-cyan-500/20 to-blue-500/20"
              },
              { 
                number: "10Gbps", 
                label: "Max Speed", 
                desc: "Fiber optic network",
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              { 
                number: "99.9%", 
                label: "Uptime", 
                desc: "Guaranteed SLA",
                gradient: "from-purple-500/20 to-pink-500/20"
              },
              { 
                number: "50M+", 
                label: "Connected", 
                desc: "Homes & businesses",
                gradient: "from-pink-500/20 to-red-500/20"
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-md border border-background/20 rounded-2xl p-8 group cursor-pointer h-full flex flex-col justify-between`}
              >
                <div className="flex flex-col">
                  <div className="text-2xl font-display font-bold text-primary mb-3 group-hover:scale-110 transition-transform leading-tight">
                    {stat.number}
                  </div>
                  <div className="text-background font-semibold text-base mb-2">
                    {stat.label}
                  </div>
                  <div className="text-background/70 text-sm leading-relaxed">
                    {stat.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator - Modern Design */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 text-background/60 hover:text-primary transition-colors group"
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-xs tracking-widest uppercase mb-3 font-semibold">Discover</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-2 bg-current rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
