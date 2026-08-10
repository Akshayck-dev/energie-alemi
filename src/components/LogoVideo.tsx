import { useEffect, useRef } from 'react';
import { cn } from '../lib/utils';
import logoVideoSrc from '../assets/Animate_the_attached_logo_in_a (1).mp4';

interface LogoVideoProps {
  className?: string;
}

export default function LogoVideo({ className }: LogoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => {
        console.warn('Video autoplay blocked:', e);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={logoVideoSrc}
      autoPlay
      muted
      loop
      playsInline
      className={cn("pointer-events-none", className)}
    />
  );
}
