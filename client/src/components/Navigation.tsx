import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = ['hero', 'about', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      sectionElements.forEach((section, index) => {
        if (!section) return;
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;
        
        if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4" data-testid="navigation">
      {sections.map((section, index) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={`nav-dot w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === index ? 'active' : 'bg-white/30 hover:bg-primary'
          }`}
          data-testid={`nav-dot-${section}`}
          aria-label={`Navigate to ${section} section`}
        />
      ))}
    </nav>
  );
}
