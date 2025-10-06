import { motion } from "framer-motion";
import { useState } from "react";
import imgFeature0 from "@/assets/images/projects/feature-card-0-hover.png";
import imgFeature1 from "@/assets/images/projects/feature-card-1-hover.png";
import imgFeature2 from "@/assets/images/projects/feature-card-2-hover.png";
import imgGlassCheck from "@/assets/images/projects/projects-glass-card-check.png";
import imgCategoryTags from "@/assets/images/projects/projects-category-tags.png";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const stacks = [
    {
      title: "MERN STACK",
      description: "MongoDB, Express, React, Node – scalable full‑stack web apps.",
      category: "MERN",
      categoryColor: "primary",
      hoverColor: "primary",
      image: imgFeature0,
      tags: ["MongoDB", "Express", "React", "Node"],
      gitLink: "https://github.com/radu985/multi-container-nginx-react-node-mongo",
      projects: [
        { title: "SaaS Dashboard", description: "Multi-tenant analytics with RBAC & billing.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600", tags: ["React", "Node", "Stripe"], gitLink: "https://github.com/radu985/nextjs-typescript-react-stripe-js" },
        { title: "Social Platform", description: "Real-time chat, feed, and notifications.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&h=600", tags: ["Socket.io", "MongoDB", "Tailwind"], gitLink: "https://github.com/radu985/Discord-Clone-NextJs" },
        { title: "E‑Commerce", description: "Headless shop with payments & inventory.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=600", tags: ["React", "Express", "Stripe"], gitLink: "https://github.com/rwieruch/react-express-stripe/fork" }
      ]
    },
    {
      title: "Next.js",
      description: "SSR, ISR and App Router for high‑performance sites.",
      category: "Next.js",
      categoryColor: "secondary",
      hoverColor: "secondary",
      image: imgFeature1,
      tags: ["Next.js", "TypeScript", "Edge"],
      gitLink: "https://github.com/radu985/Archive-powerfulyang.com",
      projects: [
        { title: "Marketing Site", description: "A/B tests, analytics, and CMS.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&h=600", tags: ["Next", "CMS", "Vercel"], gitLink: "https://github.com/Wisp-CMS/nextjs-blog-cms-wisp/fork" },
        { title: "Docs Hub", description: "MDX docs with search & dark mode.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&h=600", tags: ["MDX", "Algolia", "TS"], gitLink: "" },
        { title: "SaaS App", description: "Billing, auth, and webhooks.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=600", tags: ["NextAuth", "Prisma", "Stripe"], gitLink: "https://github.com/radu985/nextauth-prisma-stripe" }
      ]
    },
    {
      title: "PYTHON + Django",
      description: "APIs, admin and background jobs with Django.",
      category: "Python/Django",
      categoryColor: "accent",
      hoverColor: "accent",
      image: imgFeature2,
      tags: ["Django", "DRF", "Celery"],
      gitLink: "https://github.com/radu985/auto-ReservationBot-python",
      projects: [
        { title: "Analytics API", description: "REST API with JWT & throttling.", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&h=600", tags: ["DRF", "JWT", "Redis"], gitLink: "https://github.com/radu985/DRF-Docker-PipEnv-Nginx-Daphne-Redis-JWT-GraphQL" },
        { title: "Admin Portal", description: "Custom admin & reports.", image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&h=600", tags: ["Django", "PostgreSQL", "Charts"], gitLink: "https://github.com/radu985/music_charts_site" }
      ]
    },
    {
      title: "Mobile + Flutter",
      description: "Cross‑platform apps with native performance.",
      category: "Mobile",
      categoryColor: "secondary",
      hoverColor: "secondary",
      image: imgGlassCheck,
      tags: ["Flutter", "Dart", "Firebase"],
      gitLink: "https://github.com/radu985/Taskist",
      projects: [
        { title: "Commerce App", description: "Cart, checkout, and push.", image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&h=600", tags: ["Flutter", "Stripe", "Cloud Functions"],gitLink: "https://github.com/radu985/stripe-awoshe" },
        { title: "Chat App", description: "Realtime chat and groups.", image: "https://images.unsplash.com/photo-1551516594-56cb78394645?auto=format&fit=crop&w=800&h=600", tags: ["Firebase", "Provider", "Push"], gitLink: "https://github.com/radu985/stripe-awoshe" },

      ]
    },
    {
      title: "WORDPRESS Laravel",
      description: "Content + custom backends and APIs.",
      category: "WP/Laravel",
      categoryColor: "primary",
      hoverColor: "primary",
      image: imgCategoryTags,
      tags: ["WordPress", "MySQL"],
      gitLink: "https://github.com/radu985/wp-eloquent",
      projects: [
        { title: "Blog Platform", description: "SEO‑optimized headless WP.", image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&h=600", tags: ["Headless", "REST", "SEO"], gitLink: "https://github.com/radu985/restaurant-starter" },
        { title: "Booking Site", description: "Custom theme & payments.", image: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&w=800&h=600", tags: ["Woo", "Laravel API", "Stripe"], gitLink: "" },
        { title: "Company Portal", description: "CRM + dashboards.", image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&h=600", tags: ["Laravel", "Inertia", "MySQL"], gitLink: "https://github.com/radu985/ecommerce-hardware-laravel-inertia-react" }
      ]
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
            {stacks.map((project, index) => (
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
                          <a href={project.gitLink} target="_blank">
                            🔗</a>
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
            <motion.button
              onClick={() => setShowAll((v) => !v)}
              className="px-8 py-4 glass-card hover:bg-primary/20 hover:border-primary border-2 border-transparent transition-all duration-300 rounded-lg font-semibold text-lg group inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-view-all-projects"
            >
              <span>{showAll ? 'Hide Extra Projects' : 'View All Projects'}</span>
              <motion.span
                className="ml-2 inline-block"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {showAll && (
            <div className="mt-12 space-y-12">
              {stacks.map((stack, sIndex) => (
                <div key={stack.title}>
                  <h3 className="text-2xl font-display font-bold mb-6">
                    {stack.title} <span className={`text-${stack.categoryColor}`}>Projects</span>
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stack.projects.map((p, index) => (
                      <motion.div
                        key={`${stack.title}-${p.title}`}
                        className="section-reveal group"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="glass-card rounded-xl overflow-hidden transition-all duration-500"
                          whileHover={{ scale: 1.05, boxShadow: `0 20px 40px rgba(0, 212, 255, 0.2)` }}
                        >
                          <div className="relative overflow-hidden">
                            <motion.img
                              src={p.image}
                              alt={p.title}
                              className="w-full h-48 object-cover"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className={`text-xs font-semibold text-${stack.categoryColor} bg-${stack.categoryColor}/20 px-2 py-1 rounded-full`}>
                                {stack.category}
                              </span>
                              <div className="flex space-x-2">
                                <motion.button className="text-muted-foreground hover:text-primary transition-colors" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} ><a href={p.gitLink} target="_blank">🔗</a></motion.button>
                                <motion.button className="text-muted-foreground hover:text-primary transition-colors" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>🚀</motion.button>
                              </div>
                            </div>
                            <motion.h4 className={`text-lg font-bold mb-3 group-hover:text-${stack.hoverColor} transition-colors`} whileHover={{ x: 5 }}>
                              {p.title}
                            </motion.h4>
                            <p className="text-muted-foreground text-sm mb-4">{p.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {p.tags.map((tag, tagIndex) => (
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
