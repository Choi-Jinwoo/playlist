import { MusicAction, SELECT_MUSIC } from '../actions/music';
import { Music } from '../models/music';

type MusicState = { currentMusic: Music | null };

const initialState: MusicState = {
  currentMusic: null,
};

const music = (state: MusicState = initialState, action: MusicAction): MusicState => {
  switch (action.type) {
    case SELECT_MUSIC:
      return { ...state, currentMusic: action.music };

    default:
      return state;
  }
};

export default music;
