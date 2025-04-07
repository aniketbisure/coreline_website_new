'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showPlayPrompt, setShowPlayPrompt] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Function to play audio safely after user interaction
  const playAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.muted = isMuted;
      
      // Always try to play, even without interaction
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowPlayPrompt(false);
        })
        .catch((err: Error) => {
          console.error('Failed to play audio:', err);
          // Show minimal prompt if autoplay fails
          setShowPlayPrompt(true);
        });
    }
  }, [isMuted]);

  const pauseAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);
  
  // Attempt to play audio on component mount
  useEffect(() => {
    if (audioRef.current) {
      // Set initial state - unmuted by default
      audioRef.current.muted = false;
      setIsMuted(false);
      
      // Try to autoplay
      playAudio();
    }
  }, [playAudio]);
  
  const handleFirstInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      if (audioRef.current) {
        audioRef.current.muted = false;
        setIsMuted(false);
        playAudio();
      }
      setShowPlayPrompt(false);
    }
  };

  // Set up handlers for user interactions - moved outside of useEffect for reuse
  const setupInteractionListeners = () => {
    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });
    document.addEventListener('keydown', handleFirstInteraction, { once: true });
    document.addEventListener('scroll', handleFirstInteraction, { once: true });
    document.addEventListener('mousemove', handleFirstInteraction, { once: true });
  };

  // Set up interaction handlers on component mount
  useEffect(() => {
    setupInteractionListeners();
    
    // Cleanup function
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
      document.removeEventListener('mousemove', handleFirstInteraction);
    };
  }, []);

  // Handle tab visibility changes - restart audio if tab becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isPlaying) {
        if (audioRef.current && audioRef.current.paused) {
          playAudio();
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying, playAudio]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    }
  };

  return (
    <>
      {!hasInteracted && (
        <div 
          className="fixed inset-0 z-40 cursor-auto"
          onClick={handleFirstInteraction}
          style={{ opacity: 0 }}
          aria-hidden="true"
        />
      )}

      <div className="fixed bottom-4 right-4 z-50">
        <audio
          ref={audioRef}
          src="/05 Valor - AShamaluevMusic.mp3"
          loop
          preload="auto"
          playsInline
        />
        
        {/* Play/Pause Button */}
        <button 
          onClick={togglePlayPause}
          className="bg-black/80 hover:bg-black p-3 rounded-full shadow-lg transition-all border border-primary/30 hover:border-primary"
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {!isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>

      {/* Minimal prompt that appears only if autoplay fails */}
      {showPlayPrompt && !hasInteracted && (
        <div 
          onClick={handleFirstInteraction}
          className="fixed top-4 right-4 bg-black/70 text-white px-3 py-2 rounded-lg shadow-lg z-50 cursor-pointer flex items-center space-x-2 text-sm animate-pulse border border-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.536.464" />
          </svg>
          <span>Tap to enable audio</span>
        </div>
      )}
    </>
  );
};

export default AudioPlayer; 