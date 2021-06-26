import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postDirectory = join(process.cwd(), 'posts');

type Locale = string;
export const getBlogListSource = async (locale: Locale) => {
  const folders = readdirSync(postDirectory);
  const sources = folders.map(folder => {
    const file = join(postDirectory, folder, `index-${locale}.mdx`);
    const s = readFileSync(file, 'utf-8');
    const { data } = matter(s);

    return {
      ...data,
      slug: folder,
    };
  });

  return sources;
};

export const getBlogSlugs = () => {
  return readdirSync(postDirectory);
};

export const getBlogContent = async ({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) => {
  const s = readFileSync(
    join(postDirectory, slug, `index-${locale}.mdx`),
    'utf-8',
  );
  const { content, data } = matter(s);
  const d = {
    ...data,
    slug,
  };
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: d,
  });

  return {
    source: mdxSource,
    frontMatter: d,
  };
};
