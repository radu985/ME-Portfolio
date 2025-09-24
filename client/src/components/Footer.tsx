import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:rcamelia301@gmail.com",
      icon: "📧"
    },
    {
      name: "Telegram",
      href: "https://t.me/DreadmireVortex",
      icon: "📱"
    },
    {
      name: "Teams",
      href: "https://teams.microsoft.com/l/chat/0/0?users=Lily-F561@outlook.com",
      icon: "👥"
    },
    {
      name: "GitHub",
      href: "https://github.com/radu985",
      icon: "🐱"
    }
  ];

  return (
    <footer className="py-12 border-t border-border/30" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="text-center"> 
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 group text-xl"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                whileTap={{ scale: 0.9 }}
                data-testid={`social-link-${link.name.toLowerCase()}`}
              >
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {link.icon}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            © 2020 Radu Camelia. Crafted with passion and cutting-edge technology.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
