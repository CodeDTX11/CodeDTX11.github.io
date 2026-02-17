import { useScrollToTop } from '../../hooks/useScrollToTop';

interface ScrollToTopButtonProps {
  scrollToSection: (id: string) => void;
}

export function ScrollToTopButton({ scrollToSection }: ScrollToTopButtonProps) {
  const visible = useScrollToTop();

  return (
    <button
      id="scrollToTopBtn"
      className="text-body-secondary"
      aria-label="Scroll to top"
      style={{ display: visible ? 'block' : 'none' }}
      onClick={() => scrollToSection('navbar')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="40" fill="black" className="bi bi-arrow-up-circle-fill"
        viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1
        0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1
        .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
      </svg>
    </button>
  );
}
