import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

import Header from '@/components/Header';
import Container from '@/components/Container';

import { stackTech } from './constants';
import AboutMeSEO from './AboutMe.seo';

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1;
  ${props => props.theme.breakpoints.mediaMd()} {
    grid-template-columns: 6fr 4fr;
  }
`;

type AboutMeProps = {};
const AboutMe: React.FC<AboutMeProps> = () => {
  const { t } = useTranslation('about-me');

  return (
    <div className="relative">
      <AboutMeSEO />
      <Container>
        <Header />
        <Inner className="min-h-screen dark:text-white">
          <div className="py-20">
            <h1 className="text-2xl font-bold mb-4">{t('ABOUT_ME')}</h1>
            <main>
              <p className="mb-4">
                {t('GRETTINGS')}
                <br />
                {t('WORK_IN')}{' '}
                <span className="font-bold">{t('JOB_TITLE')} </span>
                <a
                  href="https://www.linkedin.com/school/crehana/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-purple-500 dark:text-purple-400"
                >
                  Crehana.
                </a>
                <br />
              </p>
              <p className="mb-4">
                {t('BIO_1')} Frontend Infraestructure, web performance,
                javascript tooling, testing
                (unit/functional/integration/snapshot/E2E/TDD/BDD/ATDD),
                best-practices, scalability, documentation, etc.
                <br />
                <br />
                {t('TOOLS')}{' '}
                <a
                  href="#stack-tech"
                  className="underline text-purple-500 dark:text-purple-400"
                >
                  {t('HERE')}
                </a>
              </p>
              <br />
              <p>{t('I_HAVE_EXPERIENCE_WITH')}</p>
              <section className="mt-4">
                <h3 className="font-bold">
                  Infraestructura y Arquitectura Frontend
                </h3>
                <p>{t('BIO_2')}</p>
              </section>
              <br />
              <section>
                <h3 className="font-bold">Web performance</h3>
                <p>
                  {t('WEB_PERFORMANCE_RESUME')}
                  <br />
                  {t('PHRASE_THAT_I_LIKE')}
                  <span className="italic font-medium">
                    {" Let's"} make the web faster{' '}
                    <span role="img" aria-label="fire">
                      🔥
                    </span>
                  </span>
                </p>
              </section>
              <br />
              <section>
                <h3 className="font-bold">Javascript tooling</h3>
                <p>
                  {t('JAVASCRIPT_TOOLING_1')}
                  <br />
                  {t('JAVASCRIPT_TOOLING_2')}
                </p>
              </section>
              <br />
              <section>
                <h3 className="font-bold">{t('UI_TITLE')}</h3>
                <p>
                  {t('UI_TITLE_1')}
                  <br />
                  {t('UI_TITLE_2')}
                </p>
              </section>
              <br />
              <br />
              <p>{t('BACKEND_EXPERIENCE')}</p>
            </main>
            <div className="mt-8" id="stack-tech">
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  <a href="#stack-tech">Stack Tech</a>
                </h2>
                {stackTech.map(stack => (
                  <React.Fragment key={stack.title}>
                    <h3 className="font-bold">{stack.title}</h3>
                    <ul className="list-disc list-inside mb-4">
                      {stack.items.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </React.Fragment>
                ))}
              </section>
            </div>
          </div>
        </Inner>
      </Container>
    </div>
  );
};

export default AboutMe;
