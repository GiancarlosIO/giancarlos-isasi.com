import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { NextSeo } from 'next-seo';

import { PostCard, Container, Header } from '@/components';

import { PostPreview, Category } from '@/types';

type PostsByCategoryProps = {
  postList: PostPreview[];
  category: Category;
};
const PostsByCategory: React.FC<PostsByCategoryProps> = ({
  postList,
  category,
}) => {
  const { t } = useTranslation('posts-by-category');

  const url = `https://mr-nexus.com${category.url}`;
  const title =
    category.slug === 'snippets'
      ? category.name
      : t('MAIN_TITLE', { category: category.name });
  const seoTitle = t('SEO_TITLE', { title });

  return (
    <React.Fragment>
      <NextSeo
        title={seoTitle}
        description={t('SEO_DESCRIPTION')}
        canonical={url}
        openGraph={{
          url,
          title: seoTitle,
          description: t('SEO_DESCRIPTION'),
          images: [
            {
              url: 'https://mr-nexus.com/img/og-image.jpg',
              width: 1280,
              height: 853,
              alt: 'Mr N',
            },
          ],
          site_name: t('SEO_SITE_NAME'),
        }}
        twitter={{
          handle: '@handle',
          site: '@mr-nexus.com',
          cardType: 'summary_large_image',
        }}
      />
      <div className="text-gray-800 dark:text-white dark:bg-gray-800 overflow-x-hidden pb-20 min-h-screen">
        <Container>
          <Header />
          <div className="pt-4 lg:pt-20">
            <h1 className="font-bold text-center text-xl lg:text-3xl mb-4 lg:mb-0 text-yellow-500 dark:text-yellow-300">
              {title.toUpperCase()}
            </h1>
            <div
              className="mx-auto"
              style={{
                maxWidth: 800,
              }}
            >
              <section>
                {postList.map((post, index) => (
                  <PostCard key={index} {...post} />
                ))}
              </section>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PostsByCategory;
