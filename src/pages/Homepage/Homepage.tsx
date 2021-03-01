import * as React from 'react';
import styled from 'styled-components';

import Header from '@/components/Header';
import Container from '@/components/Container';

import locales from './i18n/locales';

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: auto 426px;
    grid-template-rows: 20rem;
    column-gap: 2rem;
    justify-items: start;
  }
`;

const Homepage = props => {
  return (
    <div>
      {/* <div className="bg-gradient-to-r from-green-400 to-blue-500"> */}
      <div className="bg-purple-800">
        <Container className="text-white">
          <Header />
          <HeroSection className="sm:py-3 xl:py-10 mx-auto">
            <div className="text-white">
              <h1 className="xl:mt-12 text-2xl font-bold">
                {locales.es.FULL_NAME}
              </h1>
              <span className="text-xs text-light">{locales.es.JOB_TITLE}</span>
              <p
                className="mt-4 font-lg"
                dangerouslySetInnerHTML={{
                  __html: locales.es.BIO,
                }}
              />
            </div>
            <div className="mt-4 lg:mt-0 lg:justify-self-end">
              <img
                className="w-auto h-full rounded max-h-80"
                src="https://camo.githubusercontent.com/ce00948324d9e3916e58d7fbf02aefba981cc878b2f0bdd2465b10d32c4e986c/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f785541376264704c78516873535164796f672f67697068792e676966"
                alt="Mr. -N"
              />
            </div>
          </HeroSection>
        </Container>
      </div>
      <Container>Blog</Container>
    </div>
  );
};

export default Homepage;
