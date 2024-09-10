// src/components/Main/GoalSection.tsx
import React from 'react';
import styles from '@/styles/FAQ.module.css'; // Import styles specific to this section

const FAQ = () => {
  return (
    <section id="FAQ" className={styles.FAQ} >
      <div data-aos="fade-up">
        <h2>FAQ</h2>
        <div>
            <h2>Tại đây mình sẽ giải đáp các câu hỏi mà mình thường gặp nhé.</h2>
        </div>
      </div>

       <div  data-aos="fade-up" data-aos-duration="1000">
            <div >
                <ul>
                    <li>[ 01 ]</li>
                    <li>Ý nghĩa tên Junior Thành?</li>
                    <li>[ Vì trình độ của mình chưa có tốt lắm chỉ tạm ở Junior thôi ]</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>[ 02 ]</li>
                    <li>Người mong chờ?</li>
                    <li>[ Hiện tại thì mình còn độc thân và chưa có người mong chờ ]</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>[ 03 ]</li>
                    <li>Cách hoạt động Website?</li>
                    <li>[ Mình hiện tại đang thử nghiệm làm website này trên Next.js ]</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>[ 04 ]</li>
                    <li>Trường đại học?</li>
                    <li>[ Hiện tại thì mình đang học tại trường đại học Mở TP.HCM ]</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>[ 05 ]</li>
                    <li>Bạn có mấy dự án?</li>
                    <li>[ Hiện tại mình có hai dự án chính là Bookshop 360 và đây ]</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>[ 06 ]</li>
                    <li>Bạn tính học ATTT?</li>
                    <li>[ Mình đang xem xét học thêm chuyên ngành là ATTT ]</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>[ 07 ]</li>
                    <li>Đại học Mở TP.HCM?</li>
                    <li>[ Để biết thêm về trường thì cái này bạn phải tự tìm hiểu nhé ]</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>[ 08 ]</li>
                    <li>Địa điểm yêu thích?</li>
                    <li>[ Chủ yếu là các quán cafe như Guta hoặc Highland nhé ]</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>[ 09 ]</li>
                    <li>Sở thích bí mật?</li>
                    <li>[ Này mình có á nhưng bạn lấy được lòng tin mình đã hehe ]</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>[ 10 ]</li>
                    <li>Mạng xã hội?</li>
                    <li>[ Hiện tại, mình hoạt động trên nền tảng Facebook và Linkedin ]</li>
                </ul>
            </div>
            <div>
                 <h3>P/S: Ngoài ra còn nhiều thông tin khác nữa. Nếu bạn có thắc mắc thì đừng ngại inbox mình qua Facebook hay Linkedin nhé.</h3>
            </div>
      </div>
    </section>
  );
};

export default FAQ;