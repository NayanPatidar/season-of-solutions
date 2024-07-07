"use client";
// Import necessary dependencies
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

// Keyframes animation for rotating images
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Styled components
const StyledShowcase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background-color: #000;
  padding: 2rem;
`;

const TextContainer = styled.div<{ font?: string; justify?: string }>`
  text-align: center;
  color: white;
  margin-bottom: 7rem;
  font-family: Futura, sans-serif; /* Update font-family as needed */
  font-weight: 700;
  font-style: normal;
  line-height: 1.2;
  font-size: 1.4rem;
  max-width: 80rem;
  text-transform: capitalize;
  text-align: ${({ justify }) => justify || 'left'};
`;


const ImageGrid = styled.div`
  display: flex;
  flex-wrap: nowrap; /* Change this to nowrap for a single line */
  justify-content: center;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:hover::before {
    animation: ${rotateAnimation} 5s linear infinite;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -0.2rem;
    z-index: -1;
    background: linear-gradient(var(--angle), #032146, #C3F2FF, #b00);
    background-position: center;
    animation: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -0.2rem;
    z-index: -1;
    background: linear-gradient(var(--angle), #032146, #C3F2FF, #b00);
    filter: blur(1rem);
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

// Showcase component
const Showcase = () => {
  const [angle, setAngle] = useState('0deg');

  return (
    <StyledShowcase>
      <h1 className="font-impact text-white text-lg mb-5 sm:mb-10 lg:mb-15 sm:text-3xl lg:text-5xl xl:text-7xl xl:mb-20">SHOWCASE</h1>
      <TextContainer font="font-futura" justify="justify">
  <span>
    Welcome to the Google Developer Student Club (GDSC)! We are a vibrant and dynamic community of students who share a passion for technology, innovation, and collaboration. Our mission is to bridge the gap between theory and practice by providing hands-on learning opportunities and events that empower students to develop their technical skills and apply them to real-world challenges.
    <br />
    At GDSC, we offer comprehensive workshops, coding sessions, and project-based learning to help students dive into the latest technologies and gain practical experience. Whether you're a beginner looking to start your journey in tech or an experienced coder aiming to expand your knowledge, our club offers a wide range of resources and activities to support your learning goals.
    Together, let's shape the future of technology!
  </span>
    </TextContainer>
      <ImageGrid>
        {[1, 2, 3, 4, 5].map((num) => (
          <ImageContainer
            key={num}
            onMouseEnter={() => setAngle('360deg')}
            onMouseLeave={() => setAngle('0deg')}
          >
        <div className="clickable-image">
            <Image src={`/team/${num}.png`} alt={`Image ${num}`} width={500} height={500} />
            <div className="description">
                <p>Beautiful description goes here</p>
            </div>
        </div>
          </ImageContainer>
        ))}
      </ImageGrid>
    </StyledShowcase>
  );
};

export default Showcase;