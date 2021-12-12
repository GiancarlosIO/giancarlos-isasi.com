import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';

import Header from '@/components/Header';
import Container from '@/components/Container';

import { PostPreview, Category } from '@/types';

import { CategoriesChipList } from '@/components';

import { PostList, Hero } from './sections';
import { HomepageContextProvider } from './context';

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
            <Hero />
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
