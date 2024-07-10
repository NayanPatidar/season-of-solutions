"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

interface Props {
  img: string;
  hoverImg: string;
}

const ImageWithHover = ({ img, hoverImg }: Props) => {
  const isSmallScreen = useMediaQuery(768);
  const [isHovering, setIsHovered] = useState(false);

  useEffect(() => {
    if (isSmallScreen) {
      setIsHovered(true);
    }
  }, [isSmallScreen]);

  const onMouseEnter = () => {
    if (isSmallScreen) return;
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    if (isSmallScreen) return;
    setIsHovered(false);
  };
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img
        className="w-[10rem] sm:w-[22rem] h-full sm:translate-x-0 transition-all duration-500 ease-in-out"
        src={isHovering ? hoverImg : img}
      />
    </div>
  );
};

export default ImageWithHover;
