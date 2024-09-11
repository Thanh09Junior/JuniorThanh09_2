'use client'
import React,  { useState, useEffect, useRef }from 'react';
import styles from '@/styles/GoalSection.module.css'; // Import styles specific to this section

const GoalSection = () => {
  const [hoveredSection, setHoveredSection] = useState<"job" | "skills" | "language" | "communication" | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);


  
  const info = {
    job: "Mình sẽ tiếp tục cải thiện và phát triển kỹ năng chuyên ngành, nâng cao khả năng làm việc hiệu quả, cũng như rèn luyện tư duy phân tích vấn đề để đưa ra phương pháp giải quyết tốt nhất cho công việc và dự án",
    skills: "Phát triển kỹ năng sống và kỹ năng mềm là một trong những yếu tố để làm nên một cuộc sống ổn định. Nên mình sẽ không ngừng học hỏi và cải thiện kỹ năng của mình để trở thành tốt hơn qua từng ngày.",
    language: "Kỹ năng ngôn ngữ hiện nay có thể được xem là một lợi thế rất lớn. Nó tạo ra cho mình nhiều cơ hội để học tập và phát triển cũng như là tìm hiểu thêm văn hoá mới, con người mới",
    communication: "Giao tiếp hiệu quả là nền tảng của mọi mối quan hệ và hợp tác thành công. Đây có thể nói là mảng mình yếu nhất trong tất cả và hiện tại mình đang nỗ lực cải thiện mảng này sao cho phù hợp nhất đối với bản thân và cộng đồng."
  };
  
  useEffect(() => {
    if (hoveredSection) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  }, [hoveredSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setQuoteVisible(entry.isIntersecting); // Update visibility status based on intersection
      },
      {
        threshold: 0.2, // Trigger when 30% of the element is visible
      }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current); // Clean up observer
      }
    };
  }, []);

  return (
    <section id="goal" className={styles.goalSection} >
      <div ref={quoteRef} className={`${styles.quoteSection} ${quoteVisible ? styles.visible : ''}`}>
          <p data-aos="fade-right" data-aos-duration="1000">&quot;Mục tiêu cá nhân là thứ gì đó có thể thúc đẩy một người đi tiếp trong hành trình của ước mơ và hi vọng. Nó không mãnh liệt như kiên trì hay bộc phát như nội lực
            nhưng nó vẫn mang một ý nghĩa nào đó của riêng nó nhằm khẳng định lấy bản thân mình.&quot;</p>
            <p data-aos="fade-right" data-aos-duration="1000">- Junior Thành -</p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div>
          <h2>Mục tiêu cá nhân</h2>
          <p>Thứ gì định nghĩa mình?</p>
        </div>
        <div className={styles.ikigaiSection}>
          <div className={`${styles.overlay} ${hoveredSection ? styles.overlayActive : ''}`}></div>
          <div className={styles.ikigaiDiagram}>
            <div
              className={`${styles.circle} ${styles.circle1} ${hoveredSection === 'job' ? styles.active : ''}`}
              onMouseEnter={() => setHoveredSection('job')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <span>Nghiệp vụ</span>
            </div>
            <div
              className={`${styles.circle} ${styles.circle2} ${hoveredSection === 'skills' ? styles.active : ''}`}
              onMouseEnter={() => setHoveredSection('skills')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <span>Kỹ năng</span>
            </div>
            <div
              className={`${styles.circle} ${styles.circle3} ${hoveredSection === 'language' ? styles.active : ''}`}
              onMouseEnter={() => setHoveredSection('language')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <span>Ngôn ngữ</span>
            </div>
            <div
              className={`${styles.circle} ${styles.circle4} ${hoveredSection === 'communication' ? styles.active : ''}`}
              onMouseEnter={() => setHoveredSection('communication')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <span>Giao tiếp</span>
            </div>
            <div className={styles.centerText}>
              <span>Mục tiêu</span>
            </div>
          </div>
          <div className={`${styles.infoSection} ${showInfo ? styles.fadeIn : ''}`}>
            {hoveredSection && <p>{info[hoveredSection]}</p>}
          </div>
        </div>
        <div>
          <p>&quot;Học, học nữa, học mãi. Hãy mang trong mình một mục tiêu cao cả, một nhiệt huyết phấn đấu tuổi thanh xuân vì lý tưởng, ước mơ và hoài bão.&quot;</p>
          <hr/>
          <p>&quot;Nếu không có mục tiêu thì hãy có động lực. Nếu không có động lực thì hãy là chính mình, còn nếu không thể là chính mình thì hãy tìm chính mình.&quot;</p>
          <hr/>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;