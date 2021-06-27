import * as React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXProvider, MDXProviderProps } from '@mdx-js/react';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useTranslation } from 'react-i18next';

import { StaticCodeSnippet, Header, Container } from '@/components';

import { PostPreview } from '@/types';

import { H2, P, Ul, Ol, Anchor, Blockquote } from '@/components/MDXComponents';

export type BlogDetailProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  data: PostPreview;
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
  const title = t('SEO_TITLE', { title: data.title });

  return (
    <React.Fragment>
      <NextSeo
        title={title}
        description={data.contentPreview}
        canonical={url}
        openGraph={{
          title,
          description: data.contentPreview,
          url,
          type: 'article',
          article: {
            publishedTime: data.createdAtISO,
            modifiedTime: data.createdAtISO,
            authors: ['https://mr-nexus.com/'],
            tags: data.categories.map(c => c.name) || [],
          },
          images: [
            {
              url: 'https://mr-nexus.com/img/og-image.jpg',
              width: 1280,
              height: 853,
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
      <ArticleJsonLd
        url={url}
        title={title}
        images={['https://mr-nexus.com/img/og-image.jpg']}
        datePublished={data.createdAtISO}
        dateModified={data.createdAtISO}
        authorName={['Giancarlos Isasi - Mr N']}
        publisherName="Giancarlos Isasi - Mr N"
        publisherLogo="https://mr-nexus.com/favicons/apple-icon-180x180.png"
        description={data.contentPreview}
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
