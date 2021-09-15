import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initMusics, selectMusic } from '../actions/music';
import { Music } from '../models/music';
import { RootState } from '../reducers';
import data from '../assets/data/data.json';
import { Directory } from '../models/directory';

type UseMusics = [Music[] | null];

const useMusics = (directoryId: string): UseMusics => {
  const musics = useSelector((state: RootState) => state.music.musics);
  const dispatch = useDispatch();

  const handleFetch = async () => {
    const directory = data.directories.find((directory: Directory) => directory.id === directoryId);
    if (directory === undefined) return;
    dispatch(initMusics(directory.musics));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    if (musics !== null && musics.length >= 0) {
      dispatch(selectMusic(musics[0]));
    }
  }, [dispatch, musics]);

  return [musics];
};

export default useMusics;
