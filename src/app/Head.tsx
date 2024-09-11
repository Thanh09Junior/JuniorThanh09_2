// src/app/Head.tsx
import React from 'react';

const description = "Xin chào! Mình là Junior Thành, hiện đang là sinh viên năm 2 tại Đại học Mở TP.Hồ Chí Minh. Mình đang theo học ngành CNTT và mình mong rằng chúng ta có thể cùng nhau học tập và phát triển nhé.";

const social_Description = "Trang nhà của Junior Thành. Sinh viên năm 2 đại học Mở TP.Hồ Chí Minh";

const keywords = [
    "OU",
    "Junior Thành",
    "Nhà Bè",
    "Đại học Mở",
    "Đại học Mở TP.HCM",
    "HCMC-OU",
    "năm 2"
  ];

const copyright = "© 2024 Junior Thành, Mọi bản quyền được bảo lưu!";

const AppHead = () => {
 const keywordsContent = keywords.join(", ");
  return (
    <head>
      <title>Junior Thành</title> 
      <meta charSet="UTF-8" />
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywordsContent} />
      <meta name="author" content="Junior Thành" />
      <meta name="copyright" content={copyright} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content="Junior Thành" />
      <meta property="og:description" content={social_Description} />
      <meta property="og:image" content="/path/to/image.jpg" />
      <meta property="og:url" content="https://www.example.com/page" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Junior Thành" />
      <meta name="twitter:description" content={social_Description} />
      <meta name="twitter:image" content="/path/to/image.jpg" />

      <meta name="robots" content="index, follow" />
      <meta httpEquiv="refresh" content="10000" />
      <meta name="theme-color" content="#000000" />

      <link rel="icon" href="/favicon.ico" />
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
    </head>
  );
};

export default AppHead;
