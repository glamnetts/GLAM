import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { FileText, CheckCircle, AlertCircle, Scale, Clock, RefreshCw } from "lucide-react";

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-editorial bg-gradient-to-br from-foreground to-foreground/95 text-background relative overflow-hidden pt-32">
        <div className="absolute inset-0 tech-grid opacity-5" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <FileText className="w-10 h-10 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-editorial mb-6"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-background/70 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Last updated: January 16, 2026
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-editorial bg-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-2xl shadow-lg p-8 md:p-12 mb-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Welcome to GLAM NEST. By accessing and using our cable and internet services, you agree to be bound by these Terms and Conditions. 
              Please read them carefully before using our services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                icon: CheckCircle,
                title: "Acceptance of Terms",
                content: `By accessing, browsing, or using GLAM NEST services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy.\n\nIf you do not agree to these terms, you must immediately discontinue use of our services. Your continued use of the services constitutes acceptance of any modifications to these terms.`
              },
              {
                icon: FileText,
                title: "Service Description",
                content: `GLAM NEST provides:\n\n• High-speed internet connectivity via fiber optic and cable infrastructure\n• Residential and commercial internet packages\n• Professional cable installation and maintenance services\n• Network infrastructure solutions\n• 24/7 technical support and customer service\n\nService availability, speeds, and features may vary based on your location, selected package, and network conditions. Actual speeds may differ from advertised speeds due to various factors.`
              },
              {
                icon: AlertCircle,
                title: "User Responsibilities",
                content: `As a user of our services, you agree to:\n\n• Provide accurate and complete registration information\n• Maintain the security of your account credentials\n• Use services in compliance with all applicable laws and regulations\n• Not engage in illegal activities, spam, or network abuse\n• Not resell or share your connection without authorization\n• Not interfere with network infrastructure or other users\n• Promptly notify us of any unauthorized account access\n• Pay all fees and charges on time according to your service agreement`
              },
              {
                icon: Scale,
                title: "Service Level Agreement (SLA)",
                content: `For business and enterprise customers, we provide:\n\n• 99.9% uptime guarantee for fiber connections\n• Priority technical support with dedicated phone line\n• Response time commitments for service issues\n• Network monitoring and proactive maintenance\n• Service credits for SLA violations as specified in your contract\n\nResidential customers receive best-effort service with 24/7 support but are not covered by formal SLA guarantees. Scheduled maintenance and force majeure events are excluded from SLA calculations.`
              },
              {
                icon: Clock,
                title: "Service Availability & Maintenance",
                content: `While we strive for continuous service availability:\n\n• Scheduled maintenance will be announced at least 48 hours in advance\n• Emergency maintenance may occur with minimal notice\n• Service may be affected by weather, infrastructure issues, or third-party failures\n• We reserve the right to modify, suspend, or discontinue services\n• No refunds for temporary outages under 24 hours (residential)\n• Business customers may receive service credits per SLA terms\n\nWe are not liable for service interruptions beyond our reasonable control.`
              },
              {
                icon: RefreshCw,
                title: "Billing, Payment & Cancellation",
                content: `Payment and billing terms:\n\n• Monthly charges are billed in advance\n• Payment is due by the date specified on your invoice\n• Late payments may incur fees and service suspension\n• Auto-pay enrollment is available for convenience\n• Installation fees and equipment costs are non-refundable\n• Early termination fees may apply per your service agreement\n• Cancellations must be submitted 30 days in advance\n• Refunds are provided on a pro-rata basis for prepaid periods\n\nYou are responsible for all charges until cancellation is processed.`
              }
            ].map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background rounded-2xl shadow-lg p-8 md:p-10"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line pl-20">
                    {section.content}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Liability Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-amber-500/5 to-orange-500/10 rounded-2xl p-8 md:p-10 mt-12 border-2 border-amber-500/20"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To the maximum extent permitted by law, GLAM NEST shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or 
              other intangible losses resulting from:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Use or inability to use our services</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Third-party content or conduct on our network</li>
              <li>Service interruptions or errors</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our total liability shall not exceed the amount you paid for services in the three months preceding the claim.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-2xl shadow-lg p-8 md:p-10 mt-8"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Questions or Concerns?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="text-muted-foreground space-y-2">
              <p><strong>Email:</strong> legal@glamnest.com</p>
              <p><strong>Phone:</strong> (833)-611-8310</p>
              <p><strong>Address:</strong> 123 Fiber Optic Lane, Tech City, TC 12345</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
