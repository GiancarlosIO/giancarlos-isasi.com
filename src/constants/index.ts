export const linkClasses =
  ' font-bold duration-300 ease-in-out transition-colors text-purple-500 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300';
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
    url: '/about',
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
    label: 'Twitter',
    url: 'https://twitter.com/MrNexusZGT',
    target: '_blank',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/nexuszgt/',
    target: '_blank',
  },
  {
    label: 'Contáctame',
    url: 'mailto:giancarlos.isasi@gmail.com',
    target: '_blank',
  },
];
