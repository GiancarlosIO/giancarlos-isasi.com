import * as React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXProvider, MDXProviderProps } from '@mdx-js/react';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useTranslation } from 'react-i18next';
import TwitterICon from '@material-ui/icons/Twitter';

import { iconNormalizedStyled } from '@/constants/styles';

import { Chip, StaticCodeSnippet, Header, Container } from '@/components';

import { PostPreview } from '@/types';
import styles from './BlogDetail.module.scss';

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

const encodeUri =
  typeof window === 'undefined'
    ? global.encodeURIComponent
    : window.encodeURIComponent;

const BlogDetail: React.FC<BlogDetailProps> = ({ source, data }) => {
  const { t } = useTranslation('blog-detail');
  const url = `https://giancarlos-isasi.com/blog/${data.slug}/`;
  const title = t('SEO_TITLE', { title: data.title });

  const tweetText = encodeUri(
    `I just read "${data.title}" by @TheDecoderJS\n\n`,
  );
  const tweetUrl = encodeUri(url);

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
              <p className="mt-16">
                <span className="">Comparte este artículo:</span>
                <a
                  className={`${styles['twitter-button']} dark:text-white p-2`}
                  href={`https://twitter.com/intent/tweet?url=${tweetUrl}&text=${tweetText}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterICon style={iconNormalizedStyled} />
                </a>
              </p>
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
              url: data.coverImageUrl,
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
        images={[data.coverImageUrl]}
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
