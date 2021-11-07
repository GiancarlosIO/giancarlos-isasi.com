import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { NextSeo } from 'next-seo';

import {
  PostCardV2,
  Container,
  Header,
  CategoriesChipList,
} from '@/components';

import { PostPreview, Category } from '@/types';

export type TPostsByCategoryProps = {
  postList: PostPreview[];
  category: Category;
  categories: Category[];
};
const PostsByCategory: React.FC<TPostsByCategoryProps> = ({
  postList,
  category,
  categories,
}) => {
  const { t } = useTranslation('posts-by-category');

  const url = `https://giancarlos-isasi.com${category.url}`;
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
              url: 'https://giancarlos-isasi.com/img/og-image.jpg',
              width: 1280,
              height: 853,
              alt: 'TheDecoderJS',
            },
          ],
          site_name: t('SEO_SITE_NAME'),
        }}
        twitter={{
          handle: '@handle',
          site: '@giancarlos-isasi.com',
          cardType: 'summary_large_image',
        }}
      />
      <div className="text-gray-800 dark:text-white overflow-x-hidden pb-20 min-h-screen">
        <Container>
          <Header />
          <div className="pt-4 lg:pt-20">
            <h1 className="font-bold text-center text-xl lg:text-3xl mb-4 lg:mb-0 text-yellow-500 dark:text-yellow-300">
              {title.toUpperCase()}
            </h1>
            <div className="mt-4 md:mt-8">
              <CategoriesChipList categories={categories} />
            </div>
            <div className="pt-10 grid md:grid-cols-3 gap-8">
              {postList.map((post, index) => (
                <PostCardV2 key={index} {...post} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PostsByCategory;
