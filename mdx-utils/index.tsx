import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import slugify from 'slugify';

const postDirectory = join(process.cwd(), 'posts');

const transformStrToDate = (str: `${string}/${string}/${string}`): Date => {
  const d = str
    .split('/')
    .map(s => parseInt(s))
    .reverse();
  // Note: JavaScript counts months from 0 to 11.
  const date = new Date(d[0], d[1] - 1, d[2]);

  return date;
};
const transformCategory = (c: string) => ({
  name: c,
  url: `/blog/categories/${slugify(c)}/`,
});

type Locale = string;
// type Category = {
//   name: string;
//   url: string;
// };

export const getBlogListSource = async (locale: Locale, category?: string) => {
  const postCategories: string[] = [];
  const folders = readdirSync(postDirectory);
  const sources = folders.map(folder => {
    const file = join(postDirectory, folder, `index-${locale}.mdx`);
    const s = readFileSync(file, 'utf-8');
    const { data } = matter(s);

    const date = transformStrToDate(data.createdAt);
    const categories = (data.categories as string).split(', ');

    categories.forEach(c => {
      if (!postCategories.includes(c)) {
        postCategories.push(c);
      }
    });

    return {
      ...data,
      createdAt: data.createdAt,
      createdAtISO: date.toISOString(),
      slug: folder,
      categories,
    };
  });

  const categoriesFiltered = category
    ? sources.filter(s => s.categories.includes(category))
    : sources;

  const sourcesOrdered = categoriesFiltered.sort((a, b) => {
    const date1 = transformStrToDate(a.createdAt);
    const date2 = transformStrToDate(b.createdAt);

    return date2.getTime() - date1.getTime();
  });

  return {
    postList: sourcesOrdered,
    postCategories: postCategories.map(transformCategory),
  };
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
      createdAtISO: transformStrToDate(data.createdAt).toISOString(),
      title: data.title,
      contentPreview: data.contentPreview,
      slug,
      categories: data.categories.split(', ').map(transformCategory),
    },
  };
};
