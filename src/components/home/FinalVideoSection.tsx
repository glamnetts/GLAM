import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroVideo from "@/assets/hero-video.mp4";

const FinalVideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-video">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="video-overlay" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center px-6"
        >
          <p className="text-background/60 text-sm tracking-wide uppercase mb-4">
            Ready to connect?
          </p>
          <h3 className="heading-editorial text-background max-w-xl">
            Let's build the future together
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalVideoSection;
