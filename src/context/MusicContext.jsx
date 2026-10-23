import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

/**
 * ==============================================================================
 * BACKGROUND MUSIC CONTROLLER
 * Track: "Dust on the Morning Keys" (Lo-Fi Chill)
 *
 * Audio File Location:
 * /public/audio/dust-on-the-morning-keys.mp3 (Served at /audio/dust-on-the-morning-keys.mp3)
 *
 * AUDIO FILE SAFETY:
 * If the MP3 file is not present in /public/audio/, this controller detects the error
 * gracefully, marks isAvailable as false, and hides/disables the music control without
 * any console errors or application crashes.
 *
 * AUTOPLAY SAFETY:
 * Music is OFF by default. audio.play() is only ever called after an explicit
 * user click on the music control.
 * ==============================================================================
 */

const AUDIO_SRC = '/audio/dust-on-the-morning-keys.mp3';
const MAX_VOLUME = 0.12; // 12% subtle volume (within the recommended 10-15% range)
const FADE_INTERVAL_MS = 35;
const FADE_TOTAL_STEPS = 12; // ~420ms smooth fade transition

const MusicContext = createContext({
  isPlaying: false,
  isAvailable: true,
  toggleMusic: () => {},
});

export function MusicProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAvailable, setIsAvailable] = useState(() => {
    return typeof window !== 'undefined' && typeof Audio !== 'undefined';
  });
  const audioRef = useRef(null);
  const fadeTimerRef = useRef(null);

  // Clear any active volume fading interval
  const clearFadeTimer = useCallback(() => {
    if (fadeTimerRef.current) {
      clearInterval(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
  }, []);

  // Smoothly interpolate volume between current and target
  const fadeVolume = useCallback(
    (targetVol, onComplete) => {
      if (!audioRef.current) return;
      clearFadeTimer();

      const audio = audioRef.current;
      const startVol = audio.volume;
      const delta = (targetVol - startVol) / FADE_TOTAL_STEPS;
      let step = 0;

      fadeTimerRef.current = setInterval(() => {
        step += 1;
        const next = startVol + delta * step;

        if (step >= FADE_TOTAL_STEPS) {
          clearFadeTimer();
          audio.volume = Math.max(0, Math.min(1, targetVol));
          if (onComplete) onComplete();
        } else {
          audio.volume = Math.max(0, Math.min(1, next));
        }
      }, FADE_INTERVAL_MS);
    },
    [clearFadeTimer]
  );

  // Initialize audio element once on mount
  useEffect(() => {
    if (typeof window === 'undefined' || typeof Audio === 'undefined') {
      return;
    }

    try {
      const audio = new Audio();
      audio.src = AUDIO_SRC;
      audio.loop = true;
      audio.preload = 'auto';
      audio.volume = 0;

      // Gracefully handle missing file or decoding issue
      const handleError = () => {
        setIsAvailable(false);
        setIsPlaying(false);
      };

      audio.addEventListener('error', handleError);
      audioRef.current = audio;

      return () => {
        clearFadeTimer();
        audio.removeEventListener('error', handleError);
        audio.pause();
        audio.src = '';
        audioRef.current = null;
      };
    } catch {
      setIsAvailable(false);
    }
  }, [clearFadeTimer]);

  // Handle user toggle
  const toggleMusic = useCallback(() => {
    if (!audioRef.current || !isAvailable) return;

    const audio = audioRef.current;

    if (!isPlaying) {
      // START PLAYBACK: OFF -> ON
      audio.volume = 0;
      audio.loop = true;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            try {
              localStorage.setItem('portfolioMusicEnabled', 'true');
            } catch {
              // Silently ignore storage quota/security restrictions
            }
            // Smoothly fade in to 12% max volume
            fadeVolume(MAX_VOLUME);
          })
          .catch(() => {
            // Browser autoplay restrictions or playback errors handled cleanly without throwing
            setIsPlaying(false);
          });
      }
    } else {
      // STOP PLAYBACK: ON -> OFF
      fadeVolume(0, () => {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      });
      setIsPlaying(false);
      try {
        localStorage.setItem('portfolioMusicEnabled', 'false');
      } catch {
        // Silently ignore storage errors
      }
    }
  }, [isPlaying, isAvailable, fadeVolume]);

  return (
    <MusicContext.Provider value={{ isPlaying, isAvailable, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
