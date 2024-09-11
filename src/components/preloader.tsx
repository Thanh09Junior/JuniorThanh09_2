import React, { useEffect, useState } from 'react';
import styles from '@/styles/preloader.module.css'; // Import CSS module

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true); // Điều khiển hiển thị preloader

  useEffect(() => {
    // Kiểm tra xem người dùng đã từng tải trang này chưa
    const hasLoadedBefore = localStorage.getItem('hasLoadedBefore');
    if (hasLoadedBefore) {
      setShowPreloader(false); // Không hiển thị preloader nếu đã có cache
      return;
    }

    let interval: NodeJS.Timeout;
    let loadedImages = 0;
    let totalImages = 0;

    const increaseProgressGradually = () => {
      // Tăng dần % mỗi 30ms cho đến khi đạt 99%
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (resourcesLoaded) {
            if (prevProgress < 100) {
              return 100; // Đạt 100% khi tài nguyên đã tải
            }
            return prevProgress;
          } else {
            // Khi tài nguyên chưa tải xong, tiếp tục tăng nhưng không vượt quá 99%
            return Math.min(prevProgress + 1, 99);
          }
        });
      }, 30); // Điều chỉnh tốc độ tăng dần
    };

    const handleLoad = () => {
      if (loadedImages === totalImages) {
        setResourcesLoaded(true); // Đánh dấu rằng mọi tài nguyên đã tải
        clearInterval(interval); // Ngừng tăng tự động
        setProgress(100); // Tăng lên 100% khi tài nguyên đã tải xong
        setTimeout(() => {
          setIsDone(true); // Chuyển sang trạng thái "Done" sau khi đạt 100%
          // Ẩn preloader sau 1 giây với hiệu ứng fade-out
          setTimeout(() => {
            const preloaderElement = document.getElementById('preloader');
            if (preloaderElement) {
              preloaderElement.classList.add(styles.fadeOut);
              setTimeout(() => {
                preloaderElement.style.display = 'none';
                // Lưu trạng thái vào localStorage sau lần tải đầu tiên
                localStorage.setItem('hasLoadedBefore', 'true');
              }, 500);
            }
          }, 1000);
        }, 500); // Đợi một chút để chuyển đổi từ 99% lên 100% mượt mà
      }
    };

    const trackResourceLoad = (): Promise<void> => {
      return new Promise((resolve) => {
        const images = Array.from(document.images);
        totalImages = images.length;

        const onImageLoad = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            resolve(); // Khi tất cả hình ảnh đã được tải
          }
        };

        images.forEach((image) => {
          if (image.complete) {
            onImageLoad();
          } else {
            image.addEventListener('load', onImageLoad);
            image.addEventListener('error', onImageLoad);
          }
        });

        if (images.length === 0) {
          resolve();
        }
      });
    };

    trackResourceLoad().then(() => {
      increaseProgressGradually(); // Bắt đầu tăng dần % khi tài nguyên đang tải
      window.onload = handleLoad;

      if (document.readyState === 'complete') {
        handleLoad();
      }
    });

    return () => {
      clearInterval(interval);
    };
  }, [resourcesLoaded]);

  // Nếu không cần hiển thị preloader thì return null
  if (!showPreloader) return null;

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
