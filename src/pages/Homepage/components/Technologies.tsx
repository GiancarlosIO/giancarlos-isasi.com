import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  {
    url: '/img/react.png',
    alt: 'React',
  },
  {
    url: '/img/typescript.png',
    alt: 'Typescript',
  },
  {
    url: '/img/next-js.svg',
    alt: 'Nextjs, the react framework',
  },
  // {
  //   url: '/img/webpack.png',
  //   alt: 'Webpack',
  // },
  {
    url: '/img/babel.png',
    alt: 'Babel',
  },
  {
    url: '/img/jest.png',
    alt: 'Jest',
  },
  // {
  //   url: '/img/cypress.png',
  //   alt: 'Cypress',
  // },
  {
    url: '/img/styled-components.png',
    alt: 'Styled components',
  },
  {
    url: '/img/tailwindcss.svg',
    alt: 'Tailwindcss',
  },
  {
    url: '/img/gin-golang.png',
    alt: 'Gin Framework',
  },
  {
    url: '/img/gopher.png',
    alt: 'Golang',
  },
];

const Technologies = props => {
  return (
    <motion.div
      animate={{
        opacity: [0, 0.5, 1],
      }}
      transition={{
        duration: 1,
        ease: 'easeIn',
      }}
      className="w-full h-full flex flex-row flex-wrap relative mt-12 lg:mt-0"
    >
      {images.map((image, index) => (
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            delay: 0.1 * index,
            duration: 4,
            ease: 'easeInOut',
            times: [1, 0.8, 0.4, 0.3, 0.2, 0.1, 0],
            repeat: Infinity,
            // repeatDelay: 0.5 * index,
          }}
          key={image.url}
          className="p-4 w-1/2 flex justify-center"
        >
          <Image
            width="60px"
            height="60px"
            src={image.url}
            alt={image.alt}
            objectFit="contain"
            priority
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Technologies;
