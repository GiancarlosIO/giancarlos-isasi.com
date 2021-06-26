import { GetStaticPaths, GetStaticProps } from 'next';

import { getBlogSlugs, getBlogContent } from '../../mdx-utils';
import type { BlogDetailProps } from '@/pages/BlogDetail';
export { default } from '@/pages/BlogDetail';

export const getStaticProps: GetStaticProps<
  BlogDetailProps,
  {
    slug: string;
  }
> = async ({ locale, params }) => {
  const content = await getBlogContent({
    locale,
    slug: params.slug,
  });

  return {
    props: {
      ...content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getBlogSlugs();

  return {
    paths: slugs.map(slug => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};
