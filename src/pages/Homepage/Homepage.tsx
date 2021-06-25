import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useTranslation } from 'next-i18next';

import Header from '@/components/Header';
import Container from '@/components/Container';

import { MrN } from './components';

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 700px auto;
    column-gap: 2rem;
    justify-items: start;
  }
`;

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const getVariantsWithDelay = (delay: number) => ({
  exit: { x: 100, opacity: 0, transition },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay,
      ...transition,
    },
  },
});

const Homepage = () => {
  const { t } = useTranslation('homepage');

  return (
    <div>
      {/* <div className="bg-gradient-to-r from-green-400 to-blue-500"> */}
      <div>
        <Container className="">
          <Header />
          <HeroSection className="sm:py-3 xl:py-10 mx-auto">
            <div>
              <motion.div
                initial="exit"
                animate="enter"
                variants={getVariantsWithDelay(0)}
              >
                <h1 className="xl:mt-12 text-3xl font-bold">
                  <span>{t('GRETTINGS')}</span> <br />
                  <span>{t('IAM')}</span>{' '}
                  <a
                    href="https://twitter.com/MrNexusZGT"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="text-blue-600">{t('FULL_NAME')}</span>
                  </a>
                  {', '}
                  <span>{t('BIO_1')}</span>
                </h1>
              </motion.div>
              <motion.div
                initial="exit"
                animate="enter"
                variants={getVariantsWithDelay(0.3)}
              >
                <p className="mt-8 font-bold text-2xl">{t('DESCRIPTION_1')}</p>
              </motion.div>
              <motion.div
                initial="exit"
                animate="enter"
                variants={getVariantsWithDelay(0.5)}
              >
                <p className="mt-8 font-bold text-2xl">{t('DESCRIPTION_2')}</p>
              </motion.div>
            </div>
            <div className="items-center">{/* <MrN /> */}</div>
          </HeroSection>
        </Container>
      </div>
      <Container>Blog</Container>
    </div>
  );
};

export default Homepage;
