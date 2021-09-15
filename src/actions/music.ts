import { BaseAction } from '.';
import { Music } from '../models/music';

export const SELECT_MUSIC = 'SELECT_MUSIC';
export const TO_NEXT_MUSIC = 'TO_NEXT_MUSIC';
export const TO_PREVIOUS_MUSIC = 'TO_PREVIOUS_MUSIC';

export type MusicAction = SelectAction;

type SelectAction = {
  music: Music,
} & BaseAction;

type ToNextAction = {
  // empty
} & BaseAction;

type ToPreviousAction = {
  // empty
} & BaseAction;

export const select = (music: Music): SelectAction => ({
  type: SELECT_MUSIC,
  music,
});

export const toNext = (): ToNextAction => ({
  type: TO_NEXT_MUSIC,
});

export const toPrevious = (): ToPreviousAction => ({
  type: TO_PREVIOUS_MUSIC,
});
