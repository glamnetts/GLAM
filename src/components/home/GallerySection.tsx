import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import dividerVideo from "@/assets/divider-video-1.mp4";

const galleryItems = [
  { type: "image", src: gallery1, span: "col-span-1 row-span-1" },
  { type: "video", src: dividerVideo, span: "col-span-1 row-span-2" },
  { type: "image", src: gallery2, span: "col-span-1 row-span-1" },
  { type: "image", src: gallery3, span: "col-span-2 row-span-1" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-editorial bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-small text-primary mb-6 block">Gallery</span>
          <h2 className="heading-section max-w-2xl">
            A closer look at our work
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${item.span} overflow-hidden image-hover-zoom`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="Gallery"
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
