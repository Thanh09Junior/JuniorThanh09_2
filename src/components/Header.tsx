// src/components/Header.tsx
'use client'
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css'; // Import styles specific to this section

const Header = () => {
   const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [addBackground, setAddBackground] = useState(false);

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      // Cleanup khi component unmount
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${showHeader ? styles.showHeader : styles.hideHeader} ${addBackground ? styles.addBackground : ''}`} >
        <nav>
            <div>
                <h1>Junior Thành</h1>
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