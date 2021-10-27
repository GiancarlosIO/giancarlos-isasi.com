import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getBlogListSource } from '../../../mdx-utils';

export { default } from '@/pages/PostsByCategory';

export const getStaticProps: GetStaticProps = async ({
  locale: _locale,
  params,
}) => {
  const locale = _locale || 'es';

  const i18nProps = await serverSideTranslations(locale, [
    'common',
    'posts-by-category',
  ]);

  const slug = params?.slug as string;
  const { postList, postCategories } = await getBlogListSource(locale, slug);
  const category = postCategories.find(c => c.slug === slug);

  return {
    props: {
      category: category,
      postList,
      ...i18nProps,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales: _locales }) => {
  const locales = _locales || ['es'];

  const { postCategories } = await getBlogListSource('es');
  const paths = postCategories.map(c => ({
    params: {
      slug: c.slug,
    },
  }));

  const pathsWithLocales: (
    | string
    | {
        params: ParsedUrlQuery;
        locale?: string | undefined;
      }
  )[] = [];
  locales.forEach(locale => {
    paths.forEach(path => {
      pathsWithLocales.push({
        ...path,
        locale,
      });
    });
  });

  return {
    fallback: false,
    paths: pathsWithLocales,
  };
};
