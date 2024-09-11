// src/app/Head.tsx
import React from 'react';
import Head from 'next/head'; // Import the Head component from next/head

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
    <Head>
      <head>
      <meta property="og:site_name" content="Junior Thành" />
      <title>Junior Thành</title> 
      <meta charSet="UTF-8" />
      <link rel="canonical" href="https://juniorthanh09.com/" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywordsContent} />
      <meta name="author" content="Junior Thành" />
      <meta name="copyright" content={copyright} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content="Junior Thành" />
      <meta property="og:description" content={social_Description} />
      <meta property="og:image" content="/icon.png" />
      <meta property="og:url" content="https://juniorthanh09.com/" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Junior Thành" />
      <meta name="twitter:description" content={social_Description} />
      <meta name="twitter:image" content="/icon.png" />

      <meta name="robots" content="index, follow" />

      <meta name="theme-color" content="#000000" />

      <link rel="icon" href="/icon.png" />
      <link rel="preload" href="//code.tidio.co/vzjsg9odki0uznonmz8yndf4ipecdacg.js" as="script" />
      </head>
    </Head>
  );
};

export default AppHead;
