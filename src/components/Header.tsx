// src/components/Header.tsx
'use client'
import React, { useState, useEffect, useRef  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'; // Import play and pause icons from Font Awesome
import styles from '@/styles/Header.module.css'; // Import styles specific to this section

const Header = () => {
   const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [addBackground, setAddBackground] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Track if music is playing
  const [currentTrack, setCurrentTrack] = useState(1); // Track which audio is playing
  const audioRef1 = useRef<HTMLAudioElement | null>(null); // Reference to the first audio element
  const audioRef2 = useRef<HTMLAudioElement | null>(null); // Reference to the second audio element
  const [originalTitle] = useState(''); // Store the original title

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 400) {
        if (window.scrollY > lastScrollY) {
          // Nếu cuộn xuống, ẩn header
          setShowHeader(false);
        } else {
          // Nếu cuộn lên, hiển thị lại header
          setShowHeader(true);
        }
      } else {
        // Khi vị trí cuộn nhỏ hơn 400px, luôn hiển thị header
        setShowHeader(true);
      }

      // Thêm hoặc bỏ background khi cuộn qua 600px
      if (window.scrollY > 600) {
        setAddBackground(true);
      } else {
        setAddBackground(false);
      }

      setLastScrollY(window.scrollY);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      // Pause both audios
      if (audioRef1.current) audioRef1.current.pause();
      if (audioRef2.current) audioRef2.current.pause();
      // Reset title back to the original title when paused
      document.title = originalTitle;
    } else {
      // Play the first audio if currentTrack is 1, else play the second one
      if (currentTrack === 1 && audioRef1.current) {
        audioRef1.current.play();
      } else if (currentTrack === 2 && audioRef2.current) {
        audioRef2.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  // Update the title with the current time and duration of the music
  const updateTitleWithTime = (audioElement: HTMLAudioElement) => {
    if (audioElement) {
      const currentTime = audioElement.currentTime;
      const duration = audioElement.duration;

      // Convert seconds to MM:SS format
      const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
      };

      document.title = `${formatTime(currentTime)} / ${formatTime(duration)}`;
    }
  };

  // Play second track when the first one ends
  const handleAudioEnd = () => {
    setCurrentTrack(2); // Switch to the second track
    if (audioRef2.current) {
      audioRef2.current.play();
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      // Cleanup khi component unmount
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    // Update the title every second when music is playing
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      const audioElement = currentTrack === 1 ? audioRef1.current : audioRef2.current;
      if (audioElement) {
        interval = setInterval(() => updateTitleWithTime(audioElement), 1000);
      }
    } else {
      // When paused, reset the title to the original title
      document.title = originalTitle;
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, currentTrack, originalTitle]);


  return (
    <header className={`${styles.header} ${showHeader ? styles.showHeader : styles.hideHeader} ${addBackground ? styles.addBackground : ''}`} >
        <nav>
            <div>
                <h1>Junior Thành</h1>
                <div className={styles.musicControls}>
                  {/* Music Control Buttons */}
                  <button onClick={togglePlayPause} className={styles.musicButton} aria-label="Music player">
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                  </button>
                  {/* First audio track */}
                  <audio ref={audioRef1} src="/song.mp3" onEnded={handleAudioEnd} preload="auto" />
                  {/* Second audio track */}
                  <audio ref={audioRef2} src="/song2.mp3" preload="auto" />
                </div>
            </div>

            <ul>
                <li><a href="#home">Trang chủ</a></li>
                <li><a href="#about">Giới thiệu</a></li>
                <li><a href="#role">Nghiệp vụ</a></li>
                <li><a href="#goal">Mục tiêu</a></li>
                <li><a href="#FAQ">FAQ</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;