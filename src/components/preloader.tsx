// src/components/Preloader.tsx
import React, { useEffect, useState } from 'react';
import styles from '@/styles/preloader.module.css'; // Import CSS module

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Set done state and start fade-out after 100% progress
      if (progress === 100) {
        setIsDone(true);
        // Hide preloader after 2 seconds with fade-out effect
        setTimeout(() => {
          const preloaderElement = document.getElementById('preloader');
          if (preloaderElement) {
            preloaderElement.classList.add(styles.fadeOut);
            // Optional: Add a small delay to ensure smooth transition
            setTimeout(() => {
              preloaderElement.style.display = 'none'; // Ensure it's hidden
            }, 500); // Adjust delay to match fade-out duration
          }
        }, 2000); // 2 seconds hold
      }
    };

    const trackResourceLoad = (): Promise<void> => {
      return new Promise((resolve) => {
        // Track all images on the page
        const images = Array.from(document.images);
        let loadedImages = 0;

        const onImageLoad = () => {
          loadedImages++;
          setProgress((loadedImages / images.length) * 100);
          if (loadedImages === images.length) {
            resolve(); // TypeScript expects resolve to return void
          }
        };

        images.forEach((image) => {
          if (image.complete) {
            onImageLoad();
          } else {
            image.addEventListener('load', onImageLoad);
            image.addEventListener('error', onImageLoad); // Handle errors
          }
        });

        // In case there are no images
        if (images.length === 0) {
          resolve();
        }
      });
    };

    // Load resources and update progress
    trackResourceLoad().then(() => {
      // Wait for window.onload to ensure everything is loaded
      window.onload = handleLoad;

      // Also check if the page is already loaded
      if (document.readyState === 'complete') {
        handleLoad();
      }
    });
  }, [progress]);

  return (
    <div id="preloader" className={styles.preloader}>
      <div className={styles.spinner}></div>
      <div className={styles.progressWrapper}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
      </div>
      {isDone ? (
        <p className={styles.doneText}>Done</p>
      ) : (
        <p className={styles.progressText}>{Math.round(progress)}%</p>
      )}
    </div>
  );
};

export default Preloader;