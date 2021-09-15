import { INIT_MUSICS, MusicAction, SELECT_MUSIC, TO_NEXT_MUSIC, TO_PREVIOUS_MUSIC } from '../actions/music';
import { Music } from '../models/music';

type MusicState = {
  currentMusic: Music | null;
  musics: Music[] | null;
};

const initialState: MusicState = {
  currentMusic: null,
  musics: null,
};

const findMusicIndex = (currentMusic: Music, musics: Music[]) => {
  return musics.findIndex((music: Music) => currentMusic.id === music.id);
};

const findNextMusic = (currentMusic: Music, musics: Music[]) => {
  const musicIndex = findMusicIndex(currentMusic, musics);

  if (musics.length <= 0) return currentMusic;
  if (musicIndex === -1 || musicIndex + 1 > musics.length - 1) return musics[0];

  return musics[musicIndex + 1];
};

const findPreviousMusic = (currentMusic: Music, musics: Music[]) => {
  const musicIndex = findMusicIndex(currentMusic, musics);

  if (musics.length <= 0) return currentMusic;
  if (musicIndex === -1 || musicIndex - 1 < 0) return musics[musics.length - 1];

  return musics[musicIndex - 1];
};

const music = (state: MusicState = initialState, action: MusicAction): MusicState => {
  switch (action.type) {
    case SELECT_MUSIC:
      return { ...state, currentMusic: action.payload };

    case TO_NEXT_MUSIC:
      if (state.currentMusic === null || state.musics === null) return state;

      return {
        ...state,
        currentMusic: findNextMusic(state.currentMusic, state.musics),
      };

    case TO_PREVIOUS_MUSIC:
      if (state.currentMusic === null || state.musics === null) return state;

      return {
        ...state,
        currentMusic: findPreviousMusic(state.currentMusic, state.musics),
      };

    case INIT_MUSICS:
      return {
        ...state,
        musics: action.payload,
      };

    default:
      return state;
  }
};

export default music;
