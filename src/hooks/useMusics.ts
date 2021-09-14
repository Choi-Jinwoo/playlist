import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { select } from '../actions/music';
import { Music } from '../models/music';

type UseMusics = [Music[]];

const useMusics = (): UseMusics => {
  const [musics, setMusics] = useState<Music[]>([]);
  const dispatch = useDispatch();

  const handleFetch = async () => {
    setMusics([
      {
        id: '1',
        title: 'Santa tell me',
        singer: '아리아나 그란데',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkiyQB1J-DtEEa4EoflA3XqEoWe6VuBqdTw&usqp=CAU',
        audioSource: '/music/santa-tell-me.mp3',
      },
      {
        id: '2',
        title: '미리 메리 크리스마스',
        singer: '아이유',
        thumbnail: 'http://news.imaeil.com/inc/photos/2019/05/03/2019050311475036152_l.jpg',
        audioSource: '',
      },
      {
        id: '3',
        title: 'Santa tell me',
        singer: '아리아나 그란데',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkiyQB1J-DtEEa4EoflA3XqEoWe6VuBqdTw&usqp=CAU',
        audioSource: '',
      },
      {
        id: '4',
        title: '미리 메리 크리스마스',
        singer: '아이유',
        thumbnail: 'http://news.imaeil.com/inc/photos/2019/05/03/2019050311475036152_l.jpg',
        audioSource: '',
      },
      {
        id: '5',
        title: 'Santa tell me',
        singer: '아리아나 그란데',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkiyQB1J-DtEEa4EoflA3XqEoWe6VuBqdTw&usqp=CAU',
        audioSource: '',
      },
      {
        id: '6',
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

  useEffect(() => {
    if (musics.length >= 0) {
      dispatch(select(musics[0]));
    }
  }, [dispatch, musics]);

  return [musics];
};

export default useMusics;
