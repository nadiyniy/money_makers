//import React from 'react';
import React, { useState, useEffect } from 'react';
import { StyledBox, StyledTitle, StyledLink } from './PageNotFound.styled';
import { Link } from 'react-router-dom';

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => prevText + (text[index] || ''));
      index++;
      if (index > text.length) clearInterval(intervalId);
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

const PageNotFound = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = e => {
    const offsetX = (e.nativeEvent.offsetX / e.target.offsetWidth - 0.5) * 20;
    const offsetY = (e.nativeEvent.offsetY / e.target.offsetHeight - 0.5) * 20;
    setX(offsetX);
    setY(offsetY);
  };

  return (
    <StyledBox
      onMouseMove={handleMouseMove}
      style={{
        textShadow: `${x}px ${y}px 10px rgba(255, 255, 255, 0.5)`,
      }}
    >
      <StyledTitle>
        <TypingEffect text=" 4404 Page Not Found " speed={150} />
      </StyledTitle>
      <StyledLink to={'/'}>
        home page
      </StyledLink> 
    </StyledBox>
  );
};

export default PageNotFound;

