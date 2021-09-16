export const seconds2MinuteSeconds = (seconds: number): string => {
  const flooredSeconds = Math.floor(seconds);

  const minute = Math.floor(flooredSeconds / 60);
  const modSeconds = flooredSeconds % 60;

  return `${minute.toString().padStart(2, '0')}:${modSeconds.toString().padStart(2, '0')}`;
};
