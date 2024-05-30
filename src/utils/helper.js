import { useEffect, useState } from 'react';

export const MaxCharlimit = 100;
export const MaxCharlimitLongText = 1000;


export const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export const capitalize = (value) => {
  let lowerCase = value?.toLowerCase();
  return lowerCase.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
};

export const ValueToPercentage = (value, max) => {
  return (value * 100) / max;
};

export const IsLastIndex = (j, length) => {
  return j === length - 1;
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const getFileType = (value) => {
  const fileExtension = value?.name?.split('.');
  const finalType = `${value?.type?.split('/')[0]}/${fileExtension[fileExtension?.length - 1]}`;
  return finalType;
};
