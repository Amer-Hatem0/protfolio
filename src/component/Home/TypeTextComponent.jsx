
import React, { useState, useEffect } from 'react';

const TypeTextComponent = () => {
  const listTexts = ['AMER HATEM', 'Full Stack Web Developer'];

  const [index, setIndex] = useState(-1);
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const typeText = setInterval(() => {
      if (index === listTexts[current].length - 1) {
        clearInterval(typeText);
        clearText();
      } else {
        setIndex(prevIndex => prevIndex + 1);
        setText(prevText => prevText + listTexts[current][index + 1]);
      }
    }, 150);

    return () => {
      clearInterval(typeText);
    };
  }, [index, current]);

  const clearText = () => {
    const clearTextInterval = setInterval(() => {
      if (text.length === 0) {
        clearInterval(clearTextInterval);
        setIndex(-1);
        setCurrent(prevCurrent => (prevCurrent + 1) % listTexts.length);
      } else {
        setText(prevText => prevText.slice(0, -1));
      }
    }, 150);
  };

  return <div className="type-text">{text}</div>;
};

export default TypeTextComponent;
