import { useMediaQuery } from '@mantine/hooks';

export const useAllMQ = () => {
  return {
    isXS: useMediaQuery('(min-width: 350px)'),
    isSM: useMediaQuery('(min-width: 768px)'),
    isMD: useMediaQuery('(min-width: 1024px)'),
    isLG: useMediaQuery('(min-width: 1368px)'),
    isXL: useMediaQuery('(min-width: 1600px)'),
  };
};
