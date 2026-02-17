import { forwardRef, useEffect } from 'react';

export const HeroSection = forwardRef<HTMLElement>((_, ref) => {
  useEffect(() => {
    // The typing animation is started from inside a delayed timeout, so we keep
    // the interval handle in outer scope to guarantee cleanup on unmount.
    let interval: ReturnType<typeof setInterval> | undefined;

    const timer = setTimeout(() => {
      const el = document.querySelector('.typewriter-subtitle') as HTMLElement | null;
      if (!el) return;
      const text = 'Welcome To My Website';
      let index = 0;
      interval = setInterval(() => {
        if (index < text.length) {
          el.textContent += text[index];
          index++;
        } else {
          clearInterval(interval);
        }
      }, 200);
    }, 8000);

    return () => {
      // Clear both timers:
      // - timeout: prevents creating a new interval if unmounted early
      // - interval: stops character appends if unmounted after timeout fired
      clearTimeout(timer);
      if (interval) {
        clearInterval(interval);
      }
    };
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
