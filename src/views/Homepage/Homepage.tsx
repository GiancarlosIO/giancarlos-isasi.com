import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Media from 'react-media';

import Header from '@/components/Header';
import Container from '@/components/Container';

import { PostPreview, Category } from '@/types';

import { TWITTER_PROFILE } from '@/constants/social-media';
import { SocialButtons, CategoriesChipList } from '@/components';

import { ManCoding } from './components';
import { PostList } from './sections';
import { HomepageContextProvider } from './context';

const WorkingManDynamic = dynamic(
  () =>
    import(
      /* webpackChunkName: "working-main" */ './components/LottieAnimations/WorkingMan'
    ),
  {
    ssr: false,
  },
);

import styles from './Homepage.module.scss';

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
            <div
              className={`pt-2 sm:pt-3 lg:pt-10 lg:pb-12 mx-auto ${styles['hero-section']} ${styles.wrapper}`}
            >
              <div>
                <section className="text-lg md:text-2xl lg:text-3xl font-bold">
                  <p>{t('GRETTINGS')}</p>
                  <div>
                    <span>{t('IAM')}</span>{' '}
                    <a
                      href={TWITTER_PROFILE}
                      rel="noreferrer"
                      target="_blank"
                      className="inline-block"
                    >
                      <h1 className="inline-block text-blue-600 hover:underline">
                        {t('FULL_NAME')}
                      </h1>
                    </a>
                    {', '}
                    <span>{t('BIO_1')}</span>
                  </div>
                  <p className="my-4 font-normal text-base md:text-xl">
                    {t('DESCRIPTION_1')}
                  </p>
                  <SocialButtons />
                </section>
              </div>
              <Media
                queries={{
                  desktop: '(min-width: 1024px)',
                }}
                // set false for ssr
                defaultMatches={{
                  desktop: false,
                }}
              >
                {matches => {
                  return (
                    <React.Fragment>
                      {matches.desktop ? (
                        <div
                          className={`hidden lg:block w-full -mt-4 lg:-mt-12 lg:h-100 ${styles.animationWrapper}`}
                        >
                          <WorkingManDynamic />
                        </div>
                      ) : (
                        <div className="block lg:hidden mt-8 mb-4">
                          <ManCoding width="100%" height="100%" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                }}
              </Media>
            </div>
          </Container>
        </main>
        <main className="relative z-10">
          <Container>
            <div className={`relative ${styles['inner-main']}`}>
              <h2 className="font-bold text-base md:text-xl mb-4 md:mb-8">
                {t('BLOG_SECTION_TITLE').toUpperCase()}:
              </h2>
              <CategoriesChipList categories={categories} />
              <PostList />
            </div>
          </Container>
        </main>
      </div>
    </HomepageContextProvider>
  );
};

export default Homepage;
