import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getBlogSlugs, getBlogContent } from '../../mdx-utils';
import type { BlogDetailProps } from '@/pages/BlogDetail';
export { default } from '@/pages/BlogDetail';

export const getStaticProps: GetStaticProps<
  BlogDetailProps,
  {
    slug: string;
  }
> = async ({ locale, params }) => {
  const i18nProps = await serverSideTranslations(locale, [
    'common',
    'blog-detail',
  ]);

  const content = await getBlogContent({
    locale,
    slug: params.slug,
  });

  return {
    props: {
      ...content,
      ...i18nProps,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = getBlogSlugs();
  const paths = slugs.map(slug => ({
    params: {
      slug,
    },
  }));

  const pathsWithLocales = locales.reduce(
    (acc, next) => [
      ...acc,
      ...paths.map(path => ({
        ...path,
        locale: next,
      })),
    ],
    [],
  );

  return {
    paths: pathsWithLocales,
    fallback: false,
  };
};
