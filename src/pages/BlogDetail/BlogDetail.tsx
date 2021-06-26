import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXProvider } from '@mdx-js/react';

import { StaticCodeSnippet, Header, Container } from '@/components';

export type BlogDetailProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  data: {
    title: string;
    createdAt: string;
    slug: string;
  };
};

const components = {
  code: StaticCodeSnippet,
};

const BlogDetail: React.FC<BlogDetailProps> = ({ source, data }) => {
  return (
    <div className="text-gray-800 dark:text-white dark:bg-gray-800">
      <Container>
        <Header />
        <MDXProvider components={components}>
          <div>
            <h1>{data.title}</h1>
            <MDXRemote {...source} />
          </div>
        </MDXProvider>
      </Container>
    </div>
  );
};

export default BlogDetail;
