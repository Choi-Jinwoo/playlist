import { useEffect, useState } from 'react';
import { Directory } from '../models/directory';
import data from '../assets/data/data.json';

type UseDirectories = [Directory[]];

const useDirectories = (): UseDirectories => {
  const [directories, setDirectories] = useState<Directory[]>([]);

  const handleFetch = async () => {
    setDirectories(data.directories);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return [directories];
};

export default useDirectories;
