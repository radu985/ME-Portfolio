import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import myAvatar from "@/assets/images/avatar/myimage.jpg";

export default function HeroSection() {
  const [typewriterText, setTypewriterText] = useState("");
  const [squareSize, setSquareSize] = useState(15000);
  const fullText = "Full-Stack Developer & Tech Innovator";

  useEffect(() => {
    // Reset typewriter text on mount
    setTypewriterText("");
    
    const timer = setTimeout(() => {
      let i = 0;
      const typeWriter = () => {
        if (i < fullText.length) {
          setTypewriterText(fullText.substring(0, i + 1));
          i++;
          setTimeout(typeWriter, 80);
        }      };
      typeWriter();
    }, 1500);

    return () => clearTimeout(timer);
  }, [fullText]);

  // Handle responsive square size
  useEffect(() => {
    const updateSquareSize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const minDimension = Math.min(vw, vh);
      
      // Responsive sizing with proper spacing to avoid overlap
      // Ensure icons stay well outside the main content area
      if (vw < 640) setSquareSize(Math.min(800, minDimension * 0.95)); // sm: mobile
      else if (vw < 768) setSquareSize(Math.min(900, minDimension * 0.85)); // md: tablet
      else if (vw < 1024) setSquareSize(Math.min(1050, minDimension * 0.75)); // lg: small desktop
      else setSquareSize(Math.min(1000, minDimension * 0.65)); // xl+: large desktop
    };

    // Initial calculation
    updateSquareSize();

    // Add resize listener
    window.addEventListener('resize', updateSquareSize);
    
    return () => window.removeEventListener('resize', updateSquareSize);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" data-testid="hero-section">
      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto py-8 sm:py-12 md:py-16">
          {/* Floating decorative elements */}
          <motion.div 
            className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
            animate={{ 
              y: [0, -10, -5, 0],
              rotate: [0, 2, -1, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl"
            animate={{ 
              y: [0, -10, -5, 0],
              rotate: [0, 2, -1, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          <motion.div 
            className="mb-8 section-reveal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Avatar with Golden Gradient Effect */}
            <div className="flex justify-center mb-6 relative">
              {/* Golden gradient background */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 blur-xl opacity-60"></div>
              </motion.div>
              
              {/* Secondary golden glow */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1.2, 1.4, 1.2],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-yellow-500 blur-lg opacity-50"></div>
              </motion.div>
              
              {/* Avatar */}
              <img
                src={myAvatar}
                alt="Avatar"
                className="relative z-10 w-32 h-32 md:w-36 md:h-36 rounded-full object-cover ring-2 ring-yellow-400/60 shadow-5xl shadow-yellow-500/30"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.h1 
            className="section-reveal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block text-xl md:text-2xl text-muted-foreground font-light mb-2">Hello, I'm</span>
            <span className="block text-5xl md:text-7xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Radu Camelia
            </span>
          </motion.h1>

          <motion.div 
            className="section-reveal mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-foreground font-display min-h-[2rem]">
              <span className="typewriter">{typewriterText}</span>
            </p>
          </motion.div>

          <motion.div 
            className="section-reveal mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Senior developer specializing in full-stack, mobile, and blockchain solutions. 
              5+ years of experience delivering scalable, secure, and high-performance applications 
              that push the boundaries of technology.
            </p>
          </motion.div>

          <motion.div 
            className="section-reveal flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-all duration-300 animate-glow flex items-center group"
              data-testid="button-lets-work-together"
            >
              <span>Let's Work Together</span>
              <motion.span
                className="ml-2"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                🚀
              </motion.span>
            </button>
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 glass-card hover:bg-white/10 transition-all duration-300 rounded-lg font-semibold flex items-center group"
              data-testid="button-view-my-work"
            >
              <span>View My Work</span>
              <motion.span
                className="ml-2"
                whileHover={{ y: 4 }}
                transition={{ duration: 0.3 }}
              >
                ⬇️
              </motion.span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Technology items around intro forming a responsive oval shape */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {(() => {
          const techIcons = [
            "⚛️", "📘", "🌊", "🐍", "🌐", "🐘", "🍃", "🚀",
            "🔐", "📝", "▲", "🎯"
          ];

          const width = squareSize;
          const height = squareSize * 0.7; // Make oval 70% of width height
          const centerX = width / 2;
          const centerY = height / 2;

          return (
            <div className="relative" style={{ width, height }}>
              {techIcons.map((icon, i) => {
                // Calculate angle for oval positioning
                const angle = (i / techIcons.length) * Math.PI * 2;
                
                // Oval equation: x = a*cos(θ), y = b*sin(θ)
                // Maximum padding to position icons far outside the content
                const a = centerX + 200; // horizontal radius (with maximum padding)
                const b = centerY + 150; // vertical radius (with maximum padding)
                
                const x = centerX + a * Math.cos(angle);
                const y = centerY + b * Math.sin(angle);

                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.03 }}
                  >
                    {/* White gradient glow effect */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                      }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full bg-gradient-to-r from-white/40 via-white/60 to-white/40 blur-md"></div>
                    </motion.div>
                    
                    {/* Secondary white glow */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{
                        scale: [1.1, 1.3, 1.1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.15 + 0.5
                      }}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full bg-gradient-to-r from-white/30 via-white/50 to-white/30 blur-sm"></div>
                    </motion.div>
                    
                    {/* Icon container */}
                    <motion.div
                      className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 glass-card rounded-full flex items-center justify-center backdrop-blur-md text-xs sm:text-sm md:text-base ring-2 ring-white/30 shadow-lg shadow-white/20"
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: (i % 8) * 0.15 }}
                    >
                      <span className="select-none">{icon}</span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          );
        })()}
      </div>
    </section>
  );
}
