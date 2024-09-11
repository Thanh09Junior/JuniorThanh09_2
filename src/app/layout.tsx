// src/app/layout.tsx
'use client';
import React, { useEffect } from 'react';
import '@/app/globals.css'; // Import global styles
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppHead from './Head'; // Import AppHead
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from '@/components/preloader';



const RootLayout = ({ children }: { children: React.ReactNode }) => {
  
    useEffect(() => {
        AOS.init({
          easing: 'ease-out-quad',
          duration: 1000,
        });


        const script = document.createElement('script');
        script.src = "//code.tidio.co/vzjsg9odki0uznonmz8yndf4ipecdacg.js"; // Thay đổi URL theo mã nhúng của Lyro AI
        script.async = true;
        document.body.appendChild(script);
        
    
        return () => {
          document.body.removeChild(script);
        };
      }, [])
  return (
    <html lang="vi">
      <title>Junior Thành</title> 
      <AppHead />
      <body>
      <Preloader />
        <div>
        <Header />
          {children}
        <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
