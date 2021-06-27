import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXProvider, MDXProviderProps } from '@mdx-js/react';

import { StaticCodeSnippet, Header, Container } from '@/components';

import { H2, P, Ul, Ol, Anchor, Blockquote } from '@/components/MDXComponents';

export type BlogDetailProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  data: {
    title: string;
    createdAt: string;
    slug: string;
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
  return (
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
  );
};

export default BlogDetail;
