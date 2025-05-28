
import { useState, useEffect, useRef } from 'react';

interface YoutubeEmbedProps {
  videoId: string;
  onClose: () => void;
}

const YoutubeEmbed = ({ videoId, onClose }: YoutubeEmbedProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div 
        ref={wrapperRef}
        className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute w-full h-full top-0 left-0"
        ></iframe>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-black bg-opacity-60 text-white rounded-full p-2 hover:bg-opacity-80"
          aria-label="Close video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default YoutubeEmbed;
