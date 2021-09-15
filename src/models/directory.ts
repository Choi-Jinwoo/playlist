import { Music } from "./music";

export type Directory = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  musics: Music[];
};
