import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What internet speeds do you offer?",
    answer: "We offer a range of plans from 100 Mbps to 10 Gbps, depending on your location and needs. Our fiber optic technology ensures consistent speeds with minimal latency, perfect for streaming, gaming, and business applications."
  },
  {
    question: "How long does installation typically take?",
    answer: "Standard residential installations are completed within 2-4 hours. For business installations or custom setups, our team will provide a detailed timeline during the consultation. We prioritize minimal disruption to your daily operations."
  },
  {
    question: "Is there a contract required?",
    answer: "We offer both contract and month-to-month options. Contract plans come with additional benefits like discounted rates and free installation. Month-to-month plans offer flexibility with no long-term commitment."
  },
  {
    question: "What happens if my service goes down?",
    answer: "Our network maintains 99.99% uptime. In the rare event of an outage, our 24/7 support team is available immediately. Most issues are resolved remotely within minutes. For physical repairs, technicians are dispatched promptly."
  },
  {
    question: "Do you offer business solutions?",
    answer: "Yes, we provide enterprise-grade solutions including dedicated lines, managed services, cloud connectivity, and custom network architecture. Our business team works directly with you to design solutions that scale with your growth."
  }
];

const FAQItem = ({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-border"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-display text-lg md:text-xl group-hover:text-primary transition-colors pr-8">
          {faq.question}
        </span>
        <span className="flex-shrink-0 text-primary">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-editorial">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="heading-section">
            Common Questions
          </h2>
        </motion.div>

        <div className="border-t border-border">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-block bg-foreground text-background px-8 py-4 font-display tracking-wide hover:bg-primary transition-colors duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
