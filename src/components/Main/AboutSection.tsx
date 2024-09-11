// src/components/Main/AboutSection.tsx
import React from 'react';
import styles from '@/styles/AboutSection.module.css'; // Import styles specific to this section

const AboutSection = () => {
  return (
    <section id="home" className={styles.aboutSection}>
      <div className={styles.Empty}>
      </div>
      <div className={styles.Main_section} id = "about">
         <div data-aos="fade-up" data-aos-duration="1000">
            <h2>Giới thiệu</h2>
         </div>
         <div>
           <div data-aos="fade-up" data-aos-duration="1000">
              <h2>Mình tên là thành (Biệt danh: Junior Thành)</h2>
              <ul>
                <li><p>Thì hiện tại mình đang là sinh viên năm hai của trường đại học Mở TP.Hồ Chí Minh.
                  Với ngành học là công nghệ thông tin với định hướng chuyên ngành là an toàn thông tin và hệ thống quản lý.
                  Đôi khi mình cũng đổi hứng và học ngôn ngữ Anh cho vui. </p></li>
                <li><p>Sở thích của mình là nghe nhạc (chủ yếu Billie Eilish và Imagine Dragons), đồng thời mình khá thích coding trong thời gian rảnh
                  . Ngoài ra mình còn thích một thứ nữa nhưng mình chỉ nói khi bạn đạt được sự tin tưởng của mình nhé  </p></li>
                  <li><p>Mục tiêu của mình là tiếp tục phấn đấu cải thiện kỹ năng chuyên ngành để nâng cao chất lượng các dự án cá nhân và cộng đồng. Đồng thời là các kỹ năng khác như tiếng Anh và giao tiếp để mai lại sự chất lượng hơn trong cuộc sống và công việc</p></li>
              </ul>
            </div>
            <hr></hr>
            <div className={styles.Slogan}>
              <div  data-aos="fade-right" data-aos-duration="1500">
                <h2>Câu nói của mình</h2>
                <p>&quot;Chúng ta có thể không thay đổi được quá khứ. Nhưng chúng ta có quyền tạo nên sự khác biệt 
                  trong tương lai. Hãy tin tưởng bản thân khi bản thân cần nhất&quot; </p>
              </div>
              <div  data-aos="fade-left" data-aos-duration="1500">
                <h2>Podcast - Blogger</h2>
                <p>Hiện tại thì mình chưa xem xét đến việc viết Blog lại và cũng như là làm Podcast nhưng
                  các bạn có thể chờ đợi mình nhé.
                </p>
              </div>
            </div>
         </div>
         <div className={styles.imageContainer} data-aos="fade-left" data-aos-duration="1000">
          <img src="/me1.jpg" alt="About Me" className={styles.image}  title="Chiến dịch nói không với đồ nhựa."/>
          <div>
            <p>Học kì 2 - Cơ sở: Nhà Bè.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
