import { useEffect, useState } from 'react';

export function useScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      setVisible(scrollTop >= 300 && !nearBottom);
    }

    window.addEventListener('scroll', handleScroll);
    // Sync initial state in cases like browser scroll restoration.
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return visible;
}
