import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Homepage from '@/views/Homepage';

import { getBlogListSource } from '../mdx-utils';

export default Homepage;

export const getStaticProps: GetStaticProps = async ({ locale: _locale }) => {
  const locale = _locale || 'es';

  const i18nProps = await serverSideTranslations(locale, [
    'common',
    'homepage',
  ]);

  const { postList, postCategories } = await getBlogListSource(locale);

  return {
    props: {
      postList,
      categories: postCategories,
      ...i18nProps,
    },
  };
};
