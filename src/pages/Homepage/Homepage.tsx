import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useTranslation } from 'next-i18next';

import Header from '@/components/Header';
import Container from '@/components/Container';

import { Technologies } from './components';
import { ArticleList } from './sections';

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 650px auto;
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
    <div className="dark:bg-gray-800">
      <div>
        <Container>
          <Header />
          <HeroSection className="sm:py-3 xl:py-10 mx-auto text-gray-800 dark:text-white">
            <div>
              <motion.div
                initial="exit"
                animate="enter"
                variants={getVariantsWithDelay(0)}
              >
                <section className="xl:mt-12 text-3xl font-bold">
                  <span>{t('GRETTINGS')}</span> <br />
                  <span>{t('IAM')}</span>{' '}
                  <a
                    href="https://twitter.com/MrNexusZGT"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <h1 className="inline-block text-blue-600">
                      {t('FULL_NAME')}
                    </h1>
                  </a>
                  {', '}
                  <span>{t('BIO_1')}</span>
                </section>
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
            <div className="w-full">
              <Technologies />
            </div>
          </HeroSection>
        </Container>
        <div className="bg-purple-800 text-white">
          <Container>
            <ArticleList />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
