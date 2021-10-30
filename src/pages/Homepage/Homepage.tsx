import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';

import Header from '@/components/Header';
import Container from '@/components/Container';

import { PostPreview, Category } from '@/types';

import { TWITTER_PROFILE } from '@/constants/social-media';
import { SocialButtons } from '@/components';

import { WorkingMan } from './components';
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
  categories: Category[];
};
const Homepage: React.FC<HomepageProps> = ({ postList, categories }) => {
  const { t } = useTranslation('homepage');

  return (
    <HomepageContextProvider posts={postList} categories={categories}>
      <div className="text-gray-800 dark:text-white overflow-x-hidden pb-20">
        <NextSeo
          title="Giancarlos Isasi - TheDecoderJS"
          description={t('SEO_DESCRIPTION')}
          canonical="https://giancarlos-isasi.com/"
          openGraph={{
            url: 'https://giancarlos-isasi.com/',
            title: 'Giancarlos Isasi - TheDecoderJS',
            description: t('SEO_DESCRIPTION'),
            images: [
              {
                url: 'https://giancarlos-isasi.com/img/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'TheDecoderJS',
              },
            ],
            site_name: 'Giancarlos Isasi - TheDecoderJS',
          }}
          twitter={{
            handle: '@handle',
            site: '@giancarlos-isasi.com',
            cardType: 'summary_large_image',
          }}
        />
        <main className="relative mb-6 lg:mb-8">
          <Container className="relative z-20">
            <Header />
            <HeroSection className="pt-2 sm:pt-3 lg:pt-10 lg:pb-12 mx-auto">
              <div>
                <section className="text-lg md:text-2xl lg:text-3xl font-bold">
                  <p>
                    {t('GRETTINGS')}
                    <br />
                    {t('IAM')}{' '}
                    <a href={TWITTER_PROFILE} rel="noreferrer" target="_blank">
                      <h1 className="inline-block text-blue-600 hover:underline">
                        {t('FULL_NAME')}
                      </h1>
                    </a>
                    {', '}
                    {t('BIO_1')}
                  </p>
                  <p className="my-4 font-medium md:text-xl">
                    {t('DESCRIPTION_1')}
                  </p>
                  <SocialButtons />
                </section>
              </div>
              <div className="w-full -mt-4 lg:-mt-12">
                <WorkingMan />
              </div>
            </HeroSection>
          </Container>
        </main>
        <main className="relative z-10">
          <Container>
            <InnerMain className="relative">
              <div>
                <PostList />
              </div>
              <div>
                <Aside />
              </div>
            </InnerMain>
          </Container>
        </main>
      </div>
    </HomepageContextProvider>
  );
};

export default Homepage;
