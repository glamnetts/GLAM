import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The reliability of their network has transformed how we operate. Zero downtime means everything for a global business like ours.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    company: "Fortune 500 Technology Company"
  },
  {
    quote: "Switching to their fiber network was the best decision we made. Our team can now collaborate seamlessly across continents.",
    author: "Marcus Johnson",
    role: "Director of IT",
    company: "Global Media Group"
  },
  {
    quote: "The speed and consistency are unmatched. Our streaming quality improved dramatically, and our viewers noticed immediately.",
    author: "Elena Rodriguez",
    role: "Head of Broadcasting",
    company: "Digital Entertainment Ltd"
  },
  {
    quote: "Their infrastructure team worked with us to design a custom solution. The results exceeded all our expectations.",
    author: "David Park",
    role: "VP of Operations",
    company: "FinTech Solutions"
  }
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="heading-section">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative">
          <Quote className="absolute top-0 left-0 w-20 h-20 text-primary/10" />
          
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display leading-relaxed mb-12">
              "{testimonials[current].quote}"
            </blockquote>
            
            <div>
              <p className="font-display text-xl text-primary">{testimonials[current].author}</p>
              <p className="text-muted-foreground">{testimonials[current].role}</p>
              <p className="text-muted-foreground text-sm mt-1">{testimonials[current].company}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-3 border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="p-3 border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
