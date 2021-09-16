import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initMusics, selectMusic } from '../actions/music';
import { Music } from '../models/music';
import { RootState } from '../reducers';
import data from '../assets/data/data.json';
import { Directory } from '../models/directory';

type UseMusics = [Music[] | null, (id: string) => void];

const useMusics = (): UseMusics => {
  const musics = useSelector((state: RootState) => state.music.musics);
  const dispatch = useDispatch();

  const handleFetch = (directoryId: string) => {
    const directory = data.directories.find((directory: Directory) => directory.id === directoryId);
    if (directory === undefined) return;
    dispatch(initMusics(directory.musics));
  };

  useEffect(() => {
    if (musics !== null && musics.length >= 0) {
      dispatch(selectMusic(musics[0]));
    }
  }, [dispatch, musics]);

  return [musics, handleFetch];
};

export default useMusics;
