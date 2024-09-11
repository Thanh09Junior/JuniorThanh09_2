// src/app/page.tsx
import React from 'react';
import HomeSection from '@/components/Main/HomeSection';
import AboutSection from '@/components/Main/AboutSection';
import RoleSection from '@/components/Main/RoleSection';
import GoalSection from '@/components/Main/GoalSection';
import FAQ from '@/components/Main/FAQ';

const HomePage = () => {
  
  return (
    <main>
        <HomeSection />
        <AboutSection />
        <RoleSection />
        <GoalSection />
        <FAQ />
    </main>
  );
};

export default HomePage;
