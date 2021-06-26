import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

export type BlogDetailProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  data: {
    title: string;
    createdAt: string;
    slug: string;
  };
};

const BlogDetail: React.FC<BlogDetailProps> = ({ source, data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <MDXRemote {...source} />
    </div>
  );
};

export default BlogDetail;
