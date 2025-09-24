import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "DeFi Trading Platform",
      description: "Full-stack decentralized finance platform with real-time trading, portfolio analytics, and Web3 integration.",
      category: "Blockchain",
      categoryColor: "accent",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      tags: ["React", "Solidity", "Web3.js"],
      hoverColor: "primary"
    },
    {
      title: "E-Commerce Mobile App",
      description: "Cross-platform mobile application with AI-powered recommendations and seamless payment integration.",
      category: "Mobile",
      categoryColor: "secondary",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      tags: ["React Native", "Node.js", "Stripe"],
      hoverColor: "secondary"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time business intelligence platform with advanced data visualization and predictive analytics.",
      category: "Web App",
      categoryColor: "primary",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      tags: ["Next.js", "D3.js", "Python"],
      hoverColor: "accent"
    }
  ];

  return (
    <section id="projects" className="py-20 relative" data-testid="projects-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16 section-reveal"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-8">
              Featured <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions that push technological boundaries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="section-reveal group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
                data-testid={`project-${index}`}
              >
                <motion.div 
                  className="glass-card rounded-xl overflow-hidden transition-all duration-500"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 20px 40px rgba(0, 212, 255, 0.2)`
                  }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold text-${project.categoryColor} bg-${project.categoryColor}/20 px-2 py-1 rounded-full`}>
                        {project.category}
                      </span>
                      <div className="flex space-x-2">
                        <motion.button
                          className="text-muted-foreground hover:text-primary transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          data-testid={`github-link-${index}`}
                        >
                          🔗
                        </motion.button>
                        <motion.button
                          className="text-muted-foreground hover:text-primary transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          data-testid={`external-link-${index}`}
                        >
                          🚀
                        </motion.button>
                      </div>
                    </div>
                    <motion.h3 
                      className={`text-xl font-bold mb-3 group-hover:text-${project.hoverColor} transition-colors`}
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className={`text-xs px-2 py-1 bg-${tagIndex === 0 ? 'primary' : tagIndex === 1 ? 'secondary' : 'accent'}/20 text-${tagIndex === 0 ? 'primary' : tagIndex === 1 ? 'secondary' : 'accent'} rounded`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12 section-reveal"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://github.com/radu985"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass-card hover:bg-primary/20 hover:border-primary border-2 border-transparent transition-all duration-300 rounded-lg font-semibold text-lg group inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-view-all-projects"
            >
              <span>View All Projects</span>
              <motion.span
                className="ml-2 inline-block"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
