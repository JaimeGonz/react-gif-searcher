import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  /* 
    const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    };

    useEffect(() => {
    getImages();
    }, []);
  */

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then((newImages) => {
      setImages(newImages);
      setIsLoading(false);
    });
  }, []);

  return {
    images,
    isLoading,
  };
};
