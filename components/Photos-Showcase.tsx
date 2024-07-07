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

  .image-container {
    margin: 0 10px;
    transform-origin: center;
  }

  .image-container:nth-child(1) {
    transform: rotate(-10deg);
  }
  .image-container:nth-child(2) {
    transform: rotate(5deg);
  }
  .image-container:nth-child(3) {
    transform: rotate(-5deg);
  }
  .image-container:nth-child(4) {
    transform: rotate(10deg);
  }
  .image-container:nth-child(5) {
    transform: rotate(-7deg);
  }
`;

const Showcase = () => {
  return (
    <div className="overflow-y-hidden w-full bg-gradient-three text-white font-semibold font-babasneu tracking-wider flex flex-col items-center h-full">
      <span className="text-[25px] sm:text-[35px] md:text-[80px] sm:pt-10">
        SHOWCASE
      </span>
      <div className="flex flex-row w-full pt-10">
        <StyledShowcase>
          <div className="image-1">
            <Image src="/season-of-solutions/DSC00789.png" alt="Image 1" width={300} height={300} />
          </div>
          <div className="image-2">
            <Image src="/path/to/image2.jpg" alt="Image 2" width={300} height={300} />
          </div>
          <div className="image-3">
            <Image src="/path/to/image3.jpg" alt="Image 3" width={300} height={300} />
          </div>
          <div className="image-4">
            <Image src="/path/to/image4.jpg" alt="Image 4" width={300} height={300} />
          </div>
          <div className="image-5">
            <Image src="/path/to/image5.jpg" alt="Image 5" width={300} height={300} />
          </div>
        </StyledShowcase>
      </div>
    </div>
  );
};

export default function Home() {
  return <Showcase />;
}
