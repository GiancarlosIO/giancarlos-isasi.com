import Image from 'next/image';
import { motion } from 'framer-motion';

import reactLogo from '../images/react.png';
import typescriptLogo from '../images/typescript.png';
import nextLogo from '../images/next.png';
import babelLogo from '../images/babel.png';
import jestLogo from '../images/jest.png';
import styledLogo from '../images/styled-components.png';
import tailwindcssLogo from '../images/tailwindcss.png';
import ginLogo from '../images/gin-golang.png';
import gopherLogo from '../images/gopher.png';

const images = [
  {
    url: reactLogo,
    alt: 'React',
  },
  {
    url: typescriptLogo,
    alt: 'Typescript',
  },
  {
    url: nextLogo,
    alt: 'Nextjs, the react framework',
  },
  // {
  //   url: '/img/webpack.png',
  //   alt: 'Webpack',
  // },
  {
    url: babelLogo,
    alt: 'Babel',
  },
  {
    url: jestLogo,
    alt: 'Jest',
  },
  // {
  //   url: '/img/cypress.png',
  //   alt: 'Cypress',
  // },
  {
    url: styledLogo,
    alt: 'Styled components',
  },
  {
    url: tailwindcssLogo,
    alt: 'Tailwindcss',
  },
  {
    url: ginLogo,
    alt: 'Gin Framework',
  },
  {
    url: gopherLogo,
    alt: 'Golang',
  },
];

const Technologies = () => {
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
          key={image.alt}
          className="p-4 w-1/2 flex justify-center"
        >
          <Image
            width="60px"
            height="60px"
            src={image.url}
            alt={image.alt}
            objectFit="contain"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Technologies;
