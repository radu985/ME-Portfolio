import { motion } from "framer-motion";

export default function ContactSection() {
  const contactMethods = [
    {
      title: "Email",
      description: "Let's discuss your project",
      value: "rcamelia301@gmail.com",
      href: "mailto:rcamelia301@gmail.com",
      icon: "📧"
    },
    {
      title: "Telegram",
      description: "Quick communication",
      value: "@DreadmireVortex",
      href: "https://t.me/DreadmireVortex",
      icon: "📱"
    },
    {
      title: "Discord",
      description: "Real-time collaboration",
      value: "camelia83_42353",
      href: "#",
      icon: "🎮"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 relative" data-testid="contact-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16 section-reveal"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-8">
              Let's Create Something <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next project? I'm always open to challenging opportunities that push technological boundaries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="section-reveal contact-highlight p-8 rounded-xl text-center group transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5
                }}
                data-testid={`contact-${method.title.toLowerCase()}`}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-180 transition-transform duration-500 text-2xl">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-white/80 mb-4">{method.description}</p>
                {method.href.startsWith('http') || method.href.startsWith('mailto') ? (
                  <motion.a 
                    href={method.href}
                    target={method.href.startsWith('http') ? "_blank" : undefined}
                    rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-white font-semibold hover:text-white/80 transition-colors flex items-center justify-center group"
                    whileHover={{ x: 4 }}
                    data-testid={`link-${method.title.toLowerCase()}`}
                  >
                    <span>{method.value}</span>
                    <motion.span
                      className="ml-2"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      🔗
                    </motion.span>
                  </motion.a>
                ) : (
                  <p className="text-white font-semibold">{method.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center section-reveal"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
                <span className="text-lg font-semibold">Available for New Projects</span>
                <motion.span
                  className="ml-3 text-primary"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀
                </motion.span>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                I'm always excited to take on challenging projects that push the boundaries of technology. 
                Let's collaborate and build something extraordinary together.
              </p>
              <motion.button 
                className="px-10 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-lg rounded-lg transition-all duration-300 animate-glow group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('mailto:rcamelia301@gmail.com', '_blank')}
                data-testid="button-start-project"
              >
                <span>Start a Project</span>
                <motion.span
                  className="ml-3 inline-block"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
