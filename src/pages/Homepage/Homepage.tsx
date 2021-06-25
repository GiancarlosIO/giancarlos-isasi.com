import * as React from 'react';
import styled from 'styled-components';

import { useTranslation } from 'next-i18next';

import Header from '@/components/Header';
import Container from '@/components/Container';

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
  const { t } = useTranslation('homepage');

  return (
    <div>
      {/* <div className="bg-gradient-to-r from-green-400 to-blue-500"> */}
      <div>
        <Container className="">
          <Header />
          <HeroSection className="sm:py-3 xl:py-10 mx-auto">
            <div className="">
              <h1 className="xl:mt-12 text-2xl font-bold">
                <span>{t('GRETTINGS')}</span> <br />
                <span className="text-blue-600">
                  {t('IAM')} {t('FULL_NAME')}
                </span>
              </h1>
              <p
                className="mt-4 font-lg"
                dangerouslySetInnerHTML={{
                  __html: t('BIO'),
                }}
              />
            </div>
            {/* <div className="mt-4 lg:mt-0 lg:justify-self-end">
              <img
                className="w-auto h-full rounded max-h-80"
                src="https://camo.githubusercontent.com/ce00948324d9e3916e58d7fbf02aefba981cc878b2f0bdd2465b10d32c4e986c/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f785541376264704c78516873535164796f672f67697068792e676966"
                alt="Mr. -N"
              />
            </div> */}
          </HeroSection>
        </Container>
      </div>
      <Container>Blog</Container>
    </div>
  );
};

export default Homepage;
