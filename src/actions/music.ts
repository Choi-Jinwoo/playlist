import { BaseAction } from '.';
import { Music } from '../models/music';

export const SELECT_MUSIC = 'SELECT_MUSIC';

export type MusicAction = SelectAction;

type SelectAction = {
  music: Music,
} & BaseAction;

export const select = (music: Music): SelectAction => ({
  type: SELECT_MUSIC,
  music,
});
