import { useEffect, useRef } from "react";

export default function StarField() {
  const starFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStarField = () => {
      if (!starFieldRef.current) return;
      
      const starField = starFieldRef.current;
      const numberOfStars = 100;
      
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        starField.appendChild(star);
      }
    };

    createStarField();

    return () => {
      if (starFieldRef.current) {
        starFieldRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={starFieldRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(11, 20, 38, 0.8) 100%)'
      }}
      data-testid="star-field"
    />
  );
}
