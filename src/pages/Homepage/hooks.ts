import { useTranslation as nextUseTranslation } from 'next-i18next';

export const useTranslation = () => {
  return nextUseTranslation('homepage');
};
