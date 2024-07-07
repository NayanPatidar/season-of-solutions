"use client";
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const StyledShowcase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
`;

const Showcase = () => {
  return (
    <div className="overflow-y-hidden w-full bg-gradient-three text-white font-semibold font-babasneu tracking-wider flex flex-col items-center h-full">
      <span className="text-[25px] sm:text-[35px] md:text-[80px] sm:pt-10">
        SHOWCASE
      </span>
      <div className="flex flex-row w-full pt-10">
        <StyledShowcase>
          <div className="image-container">
            <Image src="/season-of-solutions/public/team/1.png" alt="Image 1"  width={300} height={300}/>
          </div>
          <div className="image-container">
            <Image src="/season-of-solutions/public/team/2.png" alt="Image 2"  width={300} height={300}/>
          </div>
          <div className="image-container">
            <Image src="/season-of-solutions/public/team/3.png" alt="Image 3"   width={300} height={300}/>
          </div>
          <div className="image-container">
            <Image src="/season-of-solutions/public/team/4.png" alt="Image 4"   width={300} height={300}/>
          </div>
          <div className="image-container">
            <Image src="/season-of-solutions/public/team/5.png" alt="Image 5"   width={300} height={300}/>
          </div>
        </StyledShowcase>
      </div>
    </div>
  );
};

export default function Home() {
  return <Showcase />;
}
