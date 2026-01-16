import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "future-of-fiber-optic-cables",
    title: "The Future of Fiber Optic Cables: What to Expect in 2026",
    excerpt: "Discover how fiber optic technology is revolutionizing internet connectivity and what innovations lie ahead for high-speed data transmission.",
    category: "Technology",
    date: "January 15, 2026",
    readTime: "5 min read",
    image: "/blog-fiber.jpg"
  },
  {
    id: 2,
    slug: "choosing-right-internet-cable",
    title: "Choosing the Right Internet Cable: A Complete Guide",
    excerpt: "Understanding the differences between coaxial, ethernet, and fiber optic cables to make the best choice for your internet connection needs.",
    category: "Guide",
    date: "January 12, 2026",
    readTime: "6 min read",
    image: "/blog-cables.jpg"
  },
  {
    id: 3,
    slug: "5g-vs-fiber-internet",
    title: "5G vs Fiber Internet: Which is Better for Your Business?",
    excerpt: "A comprehensive comparison of 5G wireless and fiber optic internet connections, exploring speed, reliability, and cost factors.",
    category: "Business",
    date: "January 10, 2026",
    readTime: "5 min read",
    image: "/blog-5g.jpg"
  },
  {
    id: 4,
    slug: "submarine-cables-powering-internet",
    title: "Submarine Cables: The Hidden Infrastructure Powering Global Internet",
    excerpt: "Explore the fascinating world of undersea fiber optic cables that carry 99% of international data traffic across oceans.",
    category: "Infrastructure",
    date: "January 8, 2026",
    readTime: "7 min read",
    image: "/blog-submarine.jpg"
  },
  {
    id: 5,
    slug: "troubleshooting-slow-internet",
    title: "Troubleshooting Slow Internet: Cable Issues and Solutions",
    excerpt: "Common cable-related problems that cause slow internet speeds and practical solutions to restore optimal connectivity.",
    category: "Support",
    date: "January 5, 2026",
    readTime: "4 min read",
    image: "/blog-troubleshoot.jpg"
  },
  {
    id: 6,
    slug: "installing-ethernet-cables",
    title: "Professional Guide to Installing Ethernet Cables at Home",
    excerpt: "Step-by-step instructions for running ethernet cables throughout your home for the fastest, most reliable internet connection.",
    category: "DIY",
    date: "January 3, 2026",
    readTime: "8 min read",
    image: "/blog-ethernet.jpg"
  }
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-full min-h-[60vh] flex items-center justify-center bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 block">
              Industry Insights
            </span>
            <h1 className="heading-section text-background mb-4 sm:mb-6">
              Cable & Internet Blog
            </h1>
            <p className="text-background/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Expert insights, guides, and news about fiber optic technology, internet infrastructure, and connectivity solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-editorial">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="bg-card border border-border rounded-lg overflow-hidden hover-lift transition-all duration-300">
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 border-2 border-primary/30 rounded-full" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-editorial bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-editorial mb-6">
              Stay Updated on Internet & Cable Technology
            </h2>
            <p className="text-editorial mb-8">
              Subscribe to our newsletter for the latest insights on fiber optics, cable infrastructure, and connectivity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
