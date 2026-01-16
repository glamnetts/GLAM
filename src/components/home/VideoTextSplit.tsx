import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dividerVideo from "@/assets/divider-video-1.mp4";

const VideoTextSplit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Video Side */}
        <div className="relative h-[50vh] lg:h-auto overflow-hidden image-hover-zoom">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={dividerVideo} type="video/mp4" />
          </video>
        </div>

        {/* Text Side */}
        <div className="flex items-center px-6 md:px-12 lg:px-20 py-20 lg:py-0 bg-secondary">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg"
          >
            <span className="text-small text-primary mb-6 block">
              Fiber Optic Technology
            </span>
            <h3 className="heading-editorial mb-8">
              Light-speed data transmission through precision-engineered networks.
            </h3>
            <p className="text-editorial mb-8">
              Our fiber optic infrastructure delivers unparalleled bandwidth and 
              reliability, forming the foundation of next-generation connectivity 
              for homes and businesses alike.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <p className="font-display text-4xl text-primary">10</p>
                <p className="text-sm text-muted-foreground">Gbps Speed</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-4xl text-primary">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoTextSplit;
