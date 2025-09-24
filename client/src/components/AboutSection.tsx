import { motion } from "framer-motion";

export default function AboutSection() {
  const features = [
    {
      icon: "💻",
      title: "Full-Stack Expertise",
      description: "End-to-end development from concept to deployment, ensuring seamless integration across all layers."
    },
    {
      icon: "🛡️",
      title: "Security First",
      description: "Building secure, scalable applications with industry best practices and cutting-edge security measures."
    },
    {
      icon: "🚀",
      title: "Performance Driven",
      description: "Optimized solutions that deliver exceptional performance and user experience across all platforms."
    }
  ];

  return (
    <section id="about" className="py-20 relative" data-testid="about-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="section-reveal mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-8">
              Building Tomorrow's <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Digital Solutions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 section-reveal">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                data-testid={`feature-card-${index}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
