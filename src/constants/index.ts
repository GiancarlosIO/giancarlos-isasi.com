import {
  TWITTER_PROFILE,
  INSTAGRAM_PROFILE,
  YOUTUBE_CHANNEL,
} from './social-media';
export const linkClasses =
  ' font-bold duration-300 ease-in-out transition-colors text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white';

export const headerLinks = [
  {
    onlyMobile: true,
    url: '/',
    label: 'Inicio',
  },
  {
    url: '/blog',
    label: 'Blog',
  },
  {
    url: '/blog/categories/snippets/',
    label: 'Snippets',
  },
  {
    url: '/experiments',
    label: 'Experimentos',
  },
  {
    url: '/about-me',
    label: 'Sobre mí',
  },
  {
    url: 'mailto:giancarlos.isasi@gmail.com',
    label: 'Contáctame',
    target: '_blank',
    onlyHeader: true,
  },
];

export const socialMediaLinks = [
  {
    label: 'Youtube',
    type: 'youtube',
    url: YOUTUBE_CHANNEL,
    target: '_blank',
    widthImage: 30,
    heightImage: 20,
  },
  {
    label: 'Twitter',
    type: 'twitter',
    url: TWITTER_PROFILE,
    target: '_blank',
    widthImage: 27,
    heightImage: 27,
  },
  {
    label: 'Instagram',
    type: 'instagram',
    url: INSTAGRAM_PROFILE,
    target: '_blank',
    widthImage: 24,
    heightImage: 24,
  },
  {
    label: 'Contáctame',
    type: 'gmail',
    url: 'mailto:giancarlos.isasi@gmail.com',
    target: '_blank',
    widthImage: 40,
    heightImage: 20,
  },
];
