import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface PopFadeCardProps {
  children: React.ReactNode;
  className?: string;
}

export function PopFadeCard({ children, className = '' }: PopFadeCardProps) {
  const ref = useIntersectionObserver(0.2);

  return (
    <div ref={ref} className={`pop-fade-element ${className}`}>
      {children}
    </div>
  );
}
