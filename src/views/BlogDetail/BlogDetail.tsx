import * as React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXProvider, MDXProviderProps } from '@mdx-js/react';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useTranslation } from 'react-i18next';

import { Chip, StaticCodeSnippet, Header, Container } from '@/components';

import { PostPreview } from '@/types';

import {
  H2,
  H3,
  P,
  Ul,
  Ol,
  Anchor,
  Blockquote,
  Mark,
} from '@/components/MDXComponents';

export type BlogDetailProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  data: PostPreview;
};

const components: MDXProviderProps['components'] = {
  code: StaticCodeSnippet,
  p: P,
  h2: H2,
  h3: H3,
  ul: Ul,
  ol: Ol,
  a: Anchor,
  mark: Mark,
  CustomQuote: Blockquote,
};

const BlogDetail: React.FC<BlogDetailProps> = ({ source, data }) => {
  const { t } = useTranslation('blog-detail');
  const url = `https://giancarlos-isasi.com/blog/${data.slug}/`;
  const title = t('SEO_TITLE', { title: data.title });

  return (
    <React.Fragment>
      <div className="text-gray-800 dark:text-white min-h-screen pb-20">
        <Container>
          <Header />
          <MDXProvider components={components}>
            <div className="font-medium">
              <h1 className="font-bold text-2xl lg:text-4xl text-center mt-10 mb-2">
                {data.title}
              </h1>
              <p className="text-center text-sm mb-6">
                {data.createdAtHumanized} - {data.readingTime} min
              </p>
              <div className="flex justify-center mb-10">
                {data.categories.map(category => (
                  <div key={category.name} className="inline-block mr-2">
                    <Chip mini label={category.name} url={category.url} />
                  </div>
                ))}
              </div>
              <MDXRemote {...source} />
            </div>
          </MDXProvider>
        </Container>
      </div>
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
            authors: ['https://giancarlos-isasi.com/'],
            tags: data.categories.map(c => c.name) || [],
          },
          images: [
            {
              url: 'https://giancarlos-isasi.com/img/og-image.jpg',
              width: 1280,
              height: 853,
              alt: 'TheDecoderJS',
            },
          ],
          site_name: t('SEO_SITE_NAME', { title: data.title }),
        }}
        twitter={{
          handle: '@handle',
          site: '@giancarlos-isasi.com',
          cardType: 'summary_large_image',
        }}
      />
      <ArticleJsonLd
        url={url}
        title={title}
        images={['https://giancarlos-isasi.com/img/og-image.jpg']}
        datePublished={data.createdAtISO}
        dateModified={data.createdAtISO}
        authorName={['Giancarlos Isasi - TheDecoderJS']}
        publisherName="Giancarlos Isasi - TheDecoderJS"
        publisherLogo="https://giancarlos-isasi.com/favicons/apple-icon-180x180.png"
        description={data.contentPreview}
      />
    </React.Fragment>
  );
};

export default BlogDetail;