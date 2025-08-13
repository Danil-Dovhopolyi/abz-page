import { useEffect, useState } from 'react';
import './HeroBackground.scss';

interface HeroBackgroundProps {
  children: React.ReactNode;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ children }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/src/assets/optimized/background.webp';

    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      console.warn('Background image failed to load');
      setImageLoaded(true); // Still show content even if image fails
    };
  }, []);

  return (
    <section className={`hero ${imageLoaded ? 'hero--loaded' : 'hero--loading'}`}>
      {children}
    </section>
  );
};
