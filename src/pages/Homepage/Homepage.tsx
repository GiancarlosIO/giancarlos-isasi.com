import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';

import Header from '@/components/Header';
import Container from '@/components/Container';

import { PostPreview, Category } from '@/types';

import { useTheme } from '@/theme';
import { TWITTER_PROFILE } from '@/constants/social-media';

import { Technologies } from './components';
import { PostList, Aside } from './sections';
import { HomepageContextProvider } from './context';

import { socialMediaLinks } from '@/constants';

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

const Wavy = styled.div`
  z-index: 1;
  bottom: -31px;
  @media (min-width: 480px) {
    bottom: -54px;
  }
  @media (min-width: 540px) {
    bottom: -60px;
  }
  @media (min-width: 600px) {
    bottom: -64px;
  }
  ${props => props.theme.breakpoints.mediaMd()} {
    bottom: -84px;
  }
  ${props => props.theme.breakpoints.mediaLg()} {
    bottom: -110px;
  }
  ${props => props.theme.breakpoints.mediaXl()} {
    bottom: -147px;
  }
  ${props => props.theme.breakpoints['media2xl']()} {
    bottom: -193px;
  }
`;

type HomepageProps = {
  postList: PostPreview[];
  categories: Category[];
};
const Homepage: React.FC<HomepageProps> = ({ postList, categories }) => {
  const { t } = useTranslation('homepage');
  const { theme } = useTheme();

  return (
    <HomepageContextProvider posts={postList} categories={categories}>
      <div className="text-gray-800 dark:text-white dark:bg-gray-800 overflow-x-hidden pb-20">
        <NextSeo
          title="Giancarlos Isasi - TheDecoderJS"
          description={t('SEO_DESCRIPTION')}
          canonical="https://mr-nexus.com/"
          openGraph={{
            url: 'https://mr-nexus.com/',
            title: 'Giancarlos Isasi - TheDecoderJS',
            description: t('SEO_DESCRIPTION'),
            images: [
              {
                url: 'https://mr-nexus.com/img/og-image.jpg',
                width: 1280,
                height: 853,
                alt: 'TheDecoderJS',
              },
            ],
            site_name: 'Giancarlos Isasi - TheDecoderJS',
          }}
          twitter={{
            handle: '@handle',
            site: '@mr-nexus.com',
            cardType: 'summary_large_image',
          }}
        />
        <main className="relative bg-purple-50 dark:bg-gray-700 mb-6 lg:mb-8">
          <Container className="relative z-20">
            <Header />
            <HeroSection className="pt-2 pb-16 sm:pb-46 sm:pt-3 lg:pt-10 lg:pb-24 mx-auto">
              <div>
                <section className="text-lg md:text-2xl lg:text-3xl font-bold">
                  <span>{t('GRETTINGS')}</span> <br />
                  <span>{t('IAM')}</span>{' '}
                  <a href={TWITTER_PROFILE} rel="noreferrer" target="_blank">
                    <h1 className="inline-block text-blue-600 hover:underline">
                      {t('FULL_NAME')}
                    </h1>
                  </a>
                  {', '}
                  <span>{t('BIO_1')}</span>
                </section>

                <p className="mt-8 font-bold text-sm md:text-xl">
                  {t('DESCRIPTION_1')}
                </p>
                <div className="mt-4 flex items-center">
                  {socialMediaLinks.map(social => {
                    return (
                      <a
                        key={social.label}
                        className="pr-1"
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          key={social.label}
                          src={social.logoUrl}
                          alt={social.label}
                          width={social.widthImage}
                          height={social.heightImage}
                          priority
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="w-full hidden lg:block">
                <Technologies />
              </div>
            </HeroSection>
          </Container>
          <Wavy className="absolute left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill={theme === 'light' ? '#ffffff' : 'rgba(31, 41, 55, 1)'}
                fillOpacity="1"
                d="M0,32L60,53.3C120,75,240,117,360,138.7C480,160,600,160,720,138.7C840,117,960,75,1080,69.3C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </Wavy>
        </main>
        <main className="relative z-10">
          <Container>
            <InnerMain className="relative">
              <PostList />
              <Aside />
            </InnerMain>
          </Container>
        </main>
      </div>
    </HomepageContextProvider>
  );
};

export default Homepage;
