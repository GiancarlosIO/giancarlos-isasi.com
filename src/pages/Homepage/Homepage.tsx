import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';

import Header from '@/components/Header';
import Container from '@/components/Container';

import { PostPreview } from '@/types';

import { Technologies } from './components';
import { PostList, Aside } from './sections';
import { HomepageContextProvider } from './context';

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  justify-items: center;

  ${props => props.theme.breakpoints.mediaLg()} {
    grid-template-columns: 650px auto;
    column-gap: 2rem;
    justify-items: start;
  }
`;

const InnerMain = styled.div`
  display: grid;
  ${props => props.theme.breakpoints.mediaLg()} {
    grid-template-columns: 2fr 1fr;
    column-gap: 96px;
  }
`;

type HomepageProps = {
  postList: PostPreview[];
};
const Homepage: React.FC<HomepageProps> = ({ postList }) => {
  const { t } = useTranslation('homepage');

  return (
    <HomepageContextProvider
      posts={postList}
      categories={Array.from({ length: 10 }).map((_, index) => ({
        id: index,
        name: 'typescript',
        url: '/blog/?categories=typescript',
      }))}
    >
      <div className="text-gray-800 dark:text-white dark:bg-gray-800 overflow-x-hidden pb-20">
        <NextSeo
          title="Giancarlos Isasi - Mr N"
          description={t('SEO_DESCRIPTION')}
          canonical="https://mr-nexus.com/"
          openGraph={{
            url: 'https://mr-nexus.com/',
            title: 'Giancarlos Isasi - Mr N',
            description: t('SEO_DESCRIPTION'),
            images: [
              {
                url: '/favicons/apple-icon-120x120.png',
                width: 120,
                height: 120,
                alt: 'Mr N',
              },
            ],
            site_name: 'Giancarlos Isasi - Mr N',
          }}
          twitter={{
            handle: '@handle',
            site: '@mr-nexus.com',
            cardType: 'summary_large_image',
          }}
        />
        <div>
          <Container>
            <Header />
            <HeroSection className="sm:py-3 xl:py-10 mx-auto">
              <div>
                <section className="xl:mt-12 text-lg md:text-2xl lg:text-3xl font-bold">
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

                <p className="mt-8 font-bold text-sm md:text-xl lg:text-2xl">
                  {t('DESCRIPTION_1')}
                </p>

                <p className="mt-8 font-bold text-sm md:text-xl lg:text-2xl">
                  {t('DESCRIPTION_2')}
                </p>
              </div>
              <div className="w-full hidden lg:block">
                <Technologies />
              </div>
            </HeroSection>
          </Container>
          <main>
            <Container>
              <InnerMain className="relative">
                <PostList />
                <Aside />
              </InnerMain>
            </Container>
          </main>
        </div>
      </div>
    </HomepageContextProvider>
  );
};

export default Homepage;
