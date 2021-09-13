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
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkiyQB1J-DtEEa4EoflA3XqEoWe6VuBqdTw&usqp=CAU',
      },
      {
        id: '2',
        title: '김주엽 노래',
        description: '김주엽이 추천하는 노래 모음',
        thumbnail: 'http://news.imaeil.com/inc/photos/2019/05/03/2019050311475036152_l.jpg',
      },
      {
        id: '3',
        title: '팝송 List',
        description: '감성적인 팝송 모음',
        thumbnail: 'https://img1.daumcdn.net/thumb/R1280x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/M7kpICX4bbcXfuMgX2DH0NT0qeg.png',
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
