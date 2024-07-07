"use client";
// Import necessary dependencies
import React, { useState } from 'react';
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
  min-height: 100vh;
  background-color: #000;
  padding: 20px;
`;

const TextContainer = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 20px;
  font-family: 'Futura-Bold', Helvetica;
  font-weight: bold;
  font-size: 24px;
  max-width: 800px;
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: nowrap; /* Change this to nowrap for a single line */
  justify-content: center;
  gap: 20px;
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
    animation: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -0.2rem;
    z-index: -1;
    background: linear-gradient(var(--angle), #032146, #C3F2FF, #b00);
    filter: blur(10px);
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
      <TextContainer>SHOWCASE</TextContainer> {/* Title added here */}
      <TextContainer>
        Welcome to the Google Developer Student Club (GDSC)! We are a vibrant and dynamic community of students who share a passion for technology, innovation, and collaboration. Our mission is to bridge the gap between theory and practice by providing hands-on learning opportunities and events that empower students to develop their technical skills and apply them to real-world challenges.
      </TextContainer>
      <ImageGrid>
        {[1, 2, 3, 4, 5].map((num) => (
          <ImageContainer
            key={num}
            onMouseEnter={() => setAngle('360deg')}
            onMouseLeave={() => setAngle('0deg')}
          >
            <Image src={`/team/${num}.png`} alt={`Image ${num}`} width={300} height={300} />
          </ImageContainer>
        ))}
      </ImageGrid>
    </StyledShowcase>
  );
};

export default Showcase;