// src/components/Header.tsx
'use client'
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Footer.module.css'; // Import styles specific to this section

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [currentTime, setCurrentTime] = useState<string>(() => new Date().toLocaleTimeString());

  useEffect(() => {
    // Set an interval to update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // 1000 ms = 1 second

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Ensure the current year is only set on the client
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <h2>Junior Thành</h2>
          <p>Vậy đến đây là kết thúc rồi. Qua thông tin trên thì các bạn có thể hiểu
            thêm về mình và cũng như là tìm ra được mục tiêu cho riêng mình nhé. Chúc các đọc giả
            và người theo dõi của mình một ngày tốt lành nhé!
          </p>
          <div className={styles.button}> 
            <a href="https://www.facebook.com/profile.php?id=61551715783777" target="_blank">Facebook</a>
            <a href="https://www.linkedin.com/in/juniorthanh09/" target="_blank">Linkedin</a>
          </div>
        </div>
        <div className={styles.list}>
          <ul>
            <li><h3>Điều hướng</h3></li>
            <li><a href="#home">Trang chủ</a></li>
            <li><a href="#about">Giới thiệu</a></li>
            <li><a href="#role">Nghiệp vụ</a></li>
            <li><a href="#goal">Mục tiêu</a></li>
            <li><a href="#FAQ">FAQ</a></li>
          </ul>
          <ul>
            <li><h3>Liên kết ngoài</h3></li>
            <li><a href="https://ou.edu.vn" target="_blank">HCMC - OU</a></li>
            <li><a href="https://thanh09junior.github.io/BookShop360_ThanhAndPhong/" target="_blank">Bookshop 360</a></li>
            <li><a href="https://wikipedia.vn" target="_blank">Wikipedia</a></li>
            <li><a href="https://juniorthanh09.com" target="_blank">Junior Thành</a></li>
            <li><a href="https://www.youtube.com/@Juniorthanh09_OU" target="_blank">Youtube</a></li>
          </ul>
        </div>
      </div>
      <hr/>
      <div>
          <p> © {currentYear} Junior Thành. Mọi quyền được bảo lưu</p>
          <p>Thời gian hiện tại: {currentTime}</p>
          <p>Ý tưởng Design: <a href="https://theartofdocumentary.com/" target="_blank">The Art Of Documentary</a></p>
      </div>
    </footer>
  );
};

export default Footer;