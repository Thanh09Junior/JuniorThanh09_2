// src/components/Main/HomeSection.tsx
'use client';
import React, { useState, useEffect } from 'react';
import styles from '@/styles/HomeSection.module.css'; // Import styles specific to this section

const HomeSection = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    // Function to update the time
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString(); // Format the time as HH:MM:SS
      setCurrentTime(formattedTime);
    };

    // Update the time initially
    updateTime();

    // Set an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clear interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="#" className= {styles.video}>
      <div id="video">
          <div className= {styles.Black_glass}></div>
          <video autoPlay loop muted>
            <source src="/train.mp4" />
          </video>
      </div>

      <div className= {styles.Main_text}>
        <div data-aos="fade-down" data-aos-duration="1500">
            <div>
              <h2>Junior Thành</h2>
              <h2>Văn Trung Thành - K23 <sup>TM</sup></h2>
            </div>
            <div>

            </div>
        </div>
        <hr data-aos="fade-left" data-aos-duration="1000"/>

        <div data-aos="fade-down" data-aos-duration="2000">
            <div>
              <h2>HCMC-OU</h2>
              <p>Sinh viên năm hai tại trường đại học Mở TP.HCM</p>
              <p className={styles.User}><br/>Thời gian làm việc: 9h30-23h</p>
            </div>

            <div>
              <h2>Châm ngôn</h2>
              <p>&quot;Gió đẩy chiều nào thì ta theo chiều đó. Miễn đến cuối con đường
                ta được là chính mình thì đó là điều chân quý nhất rồi.&quot;
              </p>
              <div className= {styles.Button}>
                <p>Thời gian:  {currentTime}</p>
              </div>
            </div>
            
            <div>
            <ul>
                  <li><h2>Ngành học</h2></li>
                  <li>Công nghệ thông tin</li>
                  <li><h2>Chuyên ngành</h2></li>
                  <li>ATTT & ĐGHT</li>
                  <li><h2>Chứng chỉ</h2></li>
                  <li>Level B1 Certificate</li>
                </ul>
            </div>
             
            <div>
            <ul>
                  <li><h2>Sở thích</h2></li>
                  <li>Nghe nhạc, Coding</li>
                  <li><h2>Trình độ</h2></li>
                  <li>HTML,CSS, JavaScript</li>
                  <li><h2>Khác</h2></li>
                  <li>Sẵn sàng hỗ trợ</li>
                </ul>
            </div>

        </div>
      </div>
    </section>
  );
};

export default HomeSection;
