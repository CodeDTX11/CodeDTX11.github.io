import { useEffect } from 'react';

export function useBodyVisibility(imageSrc: string) {
  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      document.body.style.visibility = 'visible';
    };
    img.onerror = () => {
      document.body.style.visibility = 'visible';
    };
  }, [imageSrc]);
}
