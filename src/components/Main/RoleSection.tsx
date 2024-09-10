// src/components/Main/RoleSection.tsx
import React from 'react';
import styles from '@/styles/RoleSection.module.css'; // Import styles specific to this section


const RoleSection = () => {
  return (
    <section id="role" className= {styles.nghiepvu} >
      <div className={styles.roleSection}>
        <p  data-aos="fade-right" data-aos-duration="1000">"Khi nghiệp vụ không chỉ nằm ở sự chuyên nghiệp mà còn là sự phá cách. Giữa bàn cờ cuộc sống hãy dựng ra sân khấu đặc sắc nhất để làm nên một tác phẩm của riêng mình"</p>
        <p data-aos="fade-right" data-aos-duration="1000">- Junior Thành -</p>
      </div>
      <div className={styles.roles}>
        <h2  data-aos="fade-up" data-aos-duration="1000">Nghiệp vụ bản thân</h2>
        <div>
          <div data-aos="fade-up" data-aos-duration="1200">
            <h2>Web Designer</h2>
            <div>
              <p>Thiết kế website</p>
              <hr/>
              <p>Hiện tại thì mình có kiến thức cơ bản trong thiết kế web. Bao gồm sử dụng figma và các ngôn ngữ như HTML,CSS,JavaScript
                . Ngoài ra mình còn sử dụng một số công nghệ framework như Reactjs và Nodejs trong dự án của mình.
                 Các dự án đã làm: <span><a href="#">Bookshop 360</a></span> và website này.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1700">
            <h2>Project Management</h2>
            <div>
              <p>Quản lý dự án</p>
              <hr/>
              <p>Mình có kinh nghiệm trong việc quản lý dự án như phân công thời gian sao cho hợp lý với tiến độ deadline và cũng như thúc đẩy sự căng thẳng của team. Ngoài ra mình có làm dự
                án ngoài với chủ đề liên quan đến ATTT (Firewall pfSense).
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="2100">
            <h2>Pyschology</h2>
            <div>
              <p>Tâm sự và trò chuyện</p>
              <hr/>
              <p>Thật sự thì mình cũng không phải là thánh ca động lực hay là nhà tâm lý học tài ba đâu. Mình chỉ ở đây với vai trò động viên và hỗ trợ khi bạn cần gì đó trong công việc hoặc cuộc sống
                .Còn lại mọi quyết định đều phụ thuộc vào bạn cả </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000">
            <h2>Blogging</h2>
            <div>
              <p>Viết lách</p>
              <hr/>
              <p>Hiện tại thì mình tạm ngưng mảng này do nhiều vấn đề phát sinh (thật ra chủ yếu là do mình viết khá là kì cục nên cần thời gian để rèn luyện thêm) </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleSection;