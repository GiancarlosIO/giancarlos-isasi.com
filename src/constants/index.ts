import {
  TWITTER_PROFILE,
  INSTAGRAM_PROFILE,
  YOUTUBE_CHANNEL,
} from './social-media';
export const linkClasses =
  ' font-bold duration-300 ease-in-out transition-colors text-primary-light dark:text-white hover:underline';
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
    url: YOUTUBE_CHANNEL,
    target: '_blank',
    logoUrl: '/img/youtube-logo.png',
    widthImage: 30,
    heightImage: 20,
  },
  {
    label: 'Twitter',
    url: TWITTER_PROFILE,
    target: '_blank',
    logoUrl: '/img/twitter-logo.png',
    widthImage: 27,
    heightImage: 27,
  },
  {
    label: 'Instagram',
    url: INSTAGRAM_PROFILE,
    target: '_blank',
    logoUrl: '/img/instagram-logo.png',
    widthImage: 24,
    heightImage: 24,
  },
  {
    label: 'Contáctame',
    url: 'mailto:giancarlos.isasi@gmail.com',
    target: '_blank',
    logoUrl: '/img/gmail-logo.png',
    widthImage: 40,
    heightImage: 20,
  },
];
