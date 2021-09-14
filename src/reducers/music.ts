import { MusicAction, SELECT_MUSIC } from '../actions/music';
import { Music } from '../models/music';

type MusicState = { music: Music };

const music = (state: MusicState | null = null, action: MusicAction): MusicState | null => {
  switch (action.type) {
    case SELECT_MUSIC:
      return { ...state, music: action.music };

    default:
      return state;
  }
};

export default music;
