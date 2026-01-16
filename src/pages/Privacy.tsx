import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Shield, Lock, Eye, Database, Users, Mail } from "lucide-react";

const Privacy = () => {
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
            <Shield className="w-10 h-10 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-editorial mb-6"
          >
            Privacy Policy
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
              At GLAM NET, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                icon: Database,
                title: "Information We Collect",
                content: `We collect information that you provide directly to us, including:\n\n• Personal identification information (name, email address, phone number)\n• Billing and payment information\n• Service usage data and network activity logs\n• Technical information about your devices and connection\n• Customer support communications and feedback\n\nWe also automatically collect certain information when you use our services, including IP addresses, browser type, operating system, and usage patterns.`
              },
              {
                icon: Lock,
                title: "How We Use Your Information",
                content: `We use the collected information for various purposes:\n\n• To provide, maintain, and improve our cable and internet services\n• To process transactions and send billing statements\n• To communicate with you about service updates, offers, and promotions\n• To respond to customer service requests and support needs\n• To monitor and analyze usage patterns for service optimization\n• To detect, prevent, and address technical issues and security threats\n• To comply with legal obligations and enforce our terms of service`
              },
              {
                icon: Users,
                title: "Information Sharing and Disclosure",
                content: `We do not sell your personal information to third parties. We may share your information only in the following circumstances:\n\n• With service providers who assist in operating our network and services\n• With payment processors to handle billing and transactions\n• When required by law, legal process, or government request\n• To protect the rights, property, or safety of GLAM NET, our users, or others\n• In connection with a merger, acquisition, or sale of assets\n• With your explicit consent for specific purposes`
              },
              {
                icon: Shield,
                title: "Data Security",
                content: `We implement industry-standard security measures to protect your personal information:\n\n• Encryption of data in transit and at rest\n• Regular security audits and vulnerability assessments\n• Restricted access to personal information on a need-to-know basis\n• Secure data centers with physical and electronic safeguards\n• Employee training on data protection and privacy practices\n• Incident response procedures for potential security breaches\n\nHowever, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`
              },
              {
                icon: Eye,
                title: "Your Privacy Rights",
                content: `You have certain rights regarding your personal information:\n\n• Access: Request a copy of the personal information we hold about you\n• Correction: Request correction of inaccurate or incomplete information\n• Deletion: Request deletion of your personal information (subject to legal requirements)\n• Opt-out: Unsubscribe from marketing communications at any time\n• Data Portability: Request a copy of your data in a portable format\n• Restriction: Request restriction of processing in certain circumstances\n\nTo exercise these rights, please contact our privacy team using the information below.`
              },
              {
                icon: Mail,
                title: "Contact Us",
                content: `If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:\n\nGLAM NET Privacy Team\nEmail: privacy@glamnet.com\nPhone: 1-800-GLAM-NET\nAddress: 123 Fiber Optic Lane, Tech City, TC 12345\n\nWe will respond to your inquiry within 30 days.`
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

          {/* Updates Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-10 mt-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, 
              operational, or regulatory reasons. We will notify you of any material changes by posting the new Privacy 
              Policy on our website and updating the "Last updated" date. Your continued use of our services after such 
              changes constitutes acceptance of the updated policy.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
