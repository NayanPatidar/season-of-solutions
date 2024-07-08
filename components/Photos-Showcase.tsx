import React from 'react';
import { CardContainer } from "./ui/3d-card";
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

// Keyframes for animation
const slideAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
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
  padding: 2rem;
`;

const TextContainer = styled.div<{ font?: string; justify?: string }>`
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  font-family: Futura, sans-serif; /* Update font-family as needed */
  font-weight: 400;
  font-style: normal;
  line-height: 1.66;
  font-size: 1.4rem;
  max-width: 80rem;
  text-transform: capitalize;
  text-align: ${({ justify }) => justify || 'left'};
  padding: 0 1rem; /* Adding padding here */
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 1rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s ease;
  border: 2px solid transparent; 
  flex: 1 1 20%; 
  
  @media (max-width: 768px) {
    flex: 1 1 40%;
  }

  &:hover {
    transform: scale(1.1);
  }

  &::before{
    content: "";
    position: absolute;
    inset: -0.2rem;
    z-index: -1;
    background: linear-gradient(var(--angle), #032146, #C3F2FF, #b00);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0;
    transition: opacity 0.5s ease;
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

  .clickable-image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.5s ease;
    @media (max-width: 768px) {
      bottom: 5px;
      padding: 3px 5px;
      font-size: 0.8rem;
    }
  }

  &:hover .description {
    opacity: 1;
  }
`;

// Individual Image Components
const ImageCard = ({ src, alt, description }: { src: string, alt: string, description: string }) => (
  <CardContainer>
    <ImageContainer>
      <div className="clickable-image">
        <Image src={src} alt={alt} layout="responsive" width={100} height={100} />
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </ImageContainer>
  </CardContainer>
);

// Responsive Styled Component for Text Section
const ResponsiveFlexContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

const AnimatedTextContainer = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AnimatedText = styled.div`
  display: inline-block;
  font-size: clamp(3rem, 10vw, 10rem); 
  font-weight: normal;
  font-family: 'Impact';
  color: #00b0ff; 
  animation: ${slideAnimation} 10s linear infinite; 

  &:not(:last-child) {
    margin-right: 40px; 
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Showcase component
const Showcase = () => {
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
        <ImageCard src="/team/1.png" alt="Image 1" description="Description for Image 1" />
        <ImageCard src="/team/2.png" alt="Image 2" description="Description for Image 2" />
        <ImageCard src="/team/3.png" alt="Image 3" description="Description for Image 3" />
        <ImageCard src="/team/4.png" alt="Image 4" description="Description for Image 4" />
        <ImageCard src="/team/5.png" alt="Image 5" description="Description for Image 5" />
      </ImageGrid>

      {/* Responsive Section */}
      <ResponsiveFlexContainer>
        <AnimatedTextContainer>
          <AnimatedText>LEARN CONNECT GROW</AnimatedText>
        </AnimatedTextContainer>
      </ResponsiveFlexContainer>
    </StyledShowcase>
  );
};

export default Showcase;
