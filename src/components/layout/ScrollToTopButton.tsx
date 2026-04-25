import { useScrollToTop } from '../../hooks/useScrollToTop';
import { UpArrowIcon } from '../ui/UpArrowIcon';

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
      <UpArrowIcon />
    </button>
  );
}
