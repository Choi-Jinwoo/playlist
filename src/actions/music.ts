import { Music } from '../models/music';

export const SELECT_MUSIC = 'SELECT_MUSIC' as const;
export const INIT_MUSICS = 'INIT_MUSICS' as const;
export const TO_NEXT_MUSIC = 'TO_NEXT_MUSIC' as const;
export const TO_PREVIOUS_MUSIC = 'TO_PREVIOUS_MUSIC' as const;

export type MusicAction =
  ReturnType<typeof selectMusic>
  | ReturnType<typeof initMusics>
  | ReturnType<typeof toNextMusic>
  | ReturnType<typeof toPreviousMusic>

export const selectMusic = (music: Music) => ({
  type: SELECT_MUSIC,
  payload: music,
});

export const initMusics = (musics: Music[] | null) => ({
  type: INIT_MUSICS,
  payload: musics,
});

export const toNextMusic = () => ({
  type: TO_NEXT_MUSIC,
});

export const toPreviousMusic = () => ({
  type: TO_PREVIOUS_MUSIC,
});
