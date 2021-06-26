import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postDirectory = join(process.cwd(), 'posts');

export const getBlogListSource = async () => {
  const files = readdirSync(postDirectory);
  const sources = files.map(file => {
    const s = readFileSync(join(postDirectory, file), 'utf-8');
    const { data } = matter(s);
    return data;
  });

  return sources;
};

export const getBlogContent = async (slug: string) => {
  const s = readFileSync(join(postDirectory, slug), 'utf-8');
  const { content, data } = matter(s);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    source: mdxSource,
    frontMatter: data,
  };
};
