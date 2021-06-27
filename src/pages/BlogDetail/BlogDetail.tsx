import * as React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXProvider, MDXProviderProps } from '@mdx-js/react';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';

import { StaticCodeSnippet, Header, Container } from '@/components';

import { H2, P, Ul, Ol, Anchor, Blockquote } from '@/components/MDXComponents';

export type BlogDetailProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  data: {
    title: string;
    createdAt: string;
    slug: string;
    contentPreview: string;
  };
};

const components: MDXProviderProps['components'] = {
  code: StaticCodeSnippet,
  p: P,
  h2: H2,
  ul: Ul,
  ol: Ol,
  a: Anchor,
  CustomQuote: Blockquote,
};

const BlogDetail: React.FC<BlogDetailProps> = ({ source, data }) => {
  const { t } = useTranslation('blog-detail');
  const url = `https://mr-nexus.com/blog/${data.slug}/`;
  return (
    <React.Fragment>
      <NextSeo
        title={t('SEO_TITLE', { title: data.title })}
        description={data.contentPreview}
        canonical={url}
        openGraph={{
          url,
          title: t('SEO_TITLE', { title: data.title }),
          description: data.contentPreview,
          images: [
            {
              url: '/favicons/apple-icon-120x120.png',
              width: 120,
              height: 120,
              alt: 'Mr N',
            },
          ],
          site_name: t('SEO_SITE_NAME', { title: data.title }),
        }}
        twitter={{
          handle: '@handle',
          site: '@mr-nexus.com',
          cardType: 'summary_large_image',
        }}
      />
      <div className="text-gray-800 dark:text-white dark:bg-gray-800 min-h-screen pb-20">
        <Container>
          <Header />
          <MDXProvider components={components}>
            <div className="font-medium">
              <h1 className="font-bold text-2xl lg:text-4xl text-center my-10">
                {data.title}
              </h1>
              <MDXRemote {...source} />
            </div>
          </MDXProvider>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BlogDetail;
