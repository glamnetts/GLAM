import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dividerVideo from "@/assets/divider-video-2.mp4";

const FullWidthVideoDivider = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="section-video">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={dividerVideo} type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
};

export default FullWidthVideoDivider;
