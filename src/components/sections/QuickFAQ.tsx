import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const quickFaqs = [
  {
    question: "What are your support hours?",
    answer: "Our technical support team is available 24/7, 365 days a year."
  },
  {
    question: "How quickly do you respond?",
    answer: "Average response time is under 2 minutes for chat and 4 hours for email."
  },
  {
    question: "Do you offer on-site support?",
    answer: "Yes, technicians can be dispatched same-day for urgent issues."
  }
];

const QuickFAQ = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <HelpCircle className="text-primary" />
          <h3 className="font-display text-xl">Quick Answers</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-6"
            >
              <h4 className="font-display mb-2">{faq.question}</h4>
              <p className="text-muted-foreground text-sm">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFAQ;
