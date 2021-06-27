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
      createdAt: data.createdAt,
      slug: folder,
    };
  });

  return sources.sort((a, b) => {
    const ds = a.createdAt.split('/').reverse();
    const date1 = new Date(ds);

    const ds2 = b.createdAt.split('/').reverse();
    const date2 = new Date(ds2);

    return date2.getTime() - date1.getTime();
  });
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
    data: {
      createdAt: data.createdAt,
      title: data.title,
      slug,
    },
  };
};
