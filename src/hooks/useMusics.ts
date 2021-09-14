import { useEffect, useState } from 'react';
import { Music } from '../models/music';

type UseMusics = [Music[]];

const useMusics = (): UseMusics => {
  const [musics, setMusics] = useState<Music[]>([]);

  const handleFetch = async () => {
    setMusics([
      {
        id: '1',
        title: 'Santa tell me',
        singer: '아리아나 그란데',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkiyQB1J-DtEEa4EoflA3XqEoWe6VuBqdTw&usqp=CAU',
        audioSource: '',
      },
      {
        id: '2',
        title: '미리 메리 크리스마스',
        singer: '아이유',
        thumbnail: 'http://news.imaeil.com/inc/photos/2019/05/03/2019050311475036152_l.jpg',
        audioSource: '',
      },
      {
        id: '1',
        title: 'Santa tell me',
        singer: '아리아나 그란데',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkiyQB1J-DtEEa4EoflA3XqEoWe6VuBqdTw&usqp=CAU',
        audioSource: '',
      },
      {
        id: '2',
        title: '미리 메리 크리스마스',
        singer: '아이유',
        thumbnail: 'http://news.imaeil.com/inc/photos/2019/05/03/2019050311475036152_l.jpg',
        audioSource: '',
      },
      {
        id: '1',
        title: 'Santa tell me',
        singer: '아리아나 그란데',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkiyQB1J-DtEEa4EoflA3XqEoWe6VuBqdTw&usqp=CAU',
        audioSource: '',
      },
      {
        id: '2',
        title: '미리 메리 크리스마스',
        singer: '아이유',
        thumbnail: 'http://news.imaeil.com/inc/photos/2019/05/03/2019050311475036152_l.jpg',
        audioSource: '',
      },
    ]);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return [musics];
};

export default useMusics;
