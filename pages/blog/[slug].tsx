import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ParsedUrlQuery } from 'querystring';

import { getBlogSlugs, getBlogContent } from '../../mdx-utils';
import type { BlogDetailProps } from '@/pages/BlogDetail';
export { default } from '@/pages/BlogDetail';

export const getStaticProps: GetStaticProps<
  BlogDetailProps,
  {
    slug: string;
  }
> = async ({ locale: localeProp, params }) => {
  const locale = localeProp || 'es';
  const i18nProps = await serverSideTranslations(locale, [
    'common',
    'blog-detail',
  ]);

  const content = await getBlogContent({
    locale,
    slug: params?.slug as string,
  });

  return {
    props: {
      ...content,
      ...i18nProps,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({
  locales: localesProp,
}) => {
  const locales = localesProp || ['es'];
  const slugs = getBlogSlugs();
  const paths = slugs.map(slug => ({
    params: {
      slug,
    },
  }));

  const pathsWithLocales: (
    | string
    | {
        params: ParsedUrlQuery;
        locale?: string | undefined;
      }
  )[] = [];

  // we need to create a version path for each locale
  locales.forEach(locale => {
    paths.forEach(path => {
      pathsWithLocales.push({
        ...path,
        locale,
      });
    });
  });

  return {
    paths: pathsWithLocales,
    fallback: false,
  };
};
