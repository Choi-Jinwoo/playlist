import { useEffect, useState } from 'react';
import { Directory } from '../models/directory';

type UseDirectories = [Directory[]];

const useDirectories = (): UseDirectories => {
  const [directories, setDirectories] = useState<Directory[]>([]);

  const handleFetch = async () => {
    setDirectories([
      {
        id: '1',
        title: '팝송 List',
        description: '감성적인 팝송 모음',
        thumbnail: '1.jpg',
      },
      {
        id: '2',
        title: '김주엽 노래',
        description: '김주엽이 추천하는 노래 모음',
        thumbnail: '2.jpg',
      },
      {
        id: '3',
        title: '팝송 List',
        description: '감성적인 팝송 모음',
        thumbnail: '',
      },
      {
        id: '4',
        title: '팝송 List',
        description: '감성적인 팝송 모음',
        thumbnail: '',
      },
    ]);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return [directories];
};

export default useDirectories;
