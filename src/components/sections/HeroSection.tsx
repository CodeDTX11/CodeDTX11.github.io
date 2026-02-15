import { forwardRef, useEffect } from 'react';

export const HeroSection = forwardRef<HTMLElement>((_, ref) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.querySelector('.typewriter-subtitle') as HTMLElement | null;
      if (!el) return;
      const text = 'Welcome To My Website';
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          el.textContent += text[index];
          index++;
        } else {
          clearInterval(interval);
        }
      }, 200);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} className="background-img-container">
      <div className="p-5 background-img"></div>
      <div id="title" className="text-center d-flex flex-column align-items-center">
        <h1 className="mb-3 satisfy typewriter"></h1>
        <h2 className="fw-bold display-5 text-decoration-underline typewriter-subtitle"></h2>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
