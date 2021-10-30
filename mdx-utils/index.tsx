import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import slugify from 'slugify';
import readingTime from 'reading-time';
import type { ReadTimeResults } from 'reading-time';
import format from 'date-fns/format';

import { es } from 'date-fns/locale';

const postDirectory = join(process.cwd(), 'posts');

type Locale = string;
type TCreatedAtStr = `${string}/${string}/${string}`;
type TMDData = {
  createdAt: TCreatedAtStr;
  title: string;
  contentPreview: string;
  categories: string;
  coverImageUrl: string;
};
// type Category = {
//   name: string;
//   url: string;
// };

const transformStrToDate = (str: TCreatedAtStr): Date => {
  const d = str
    .split('/')
    .map(s => parseInt(s))
    .reverse();
  // Note: JavaScript counts months from 0 to 11.
  const date = new Date(d[0], d[1] - 1, d[2]);

  return date;
};
const transformCategory = (c: string) => {
  const slug = slugify(c);
  return {
    slug,
    name: c,
    url: `/blog/categories/${slug}/`,
  };
};

function formatMDData(slug: string, data: TMDData, stats: ReadTimeResults) {
  const createdAtDate = transformStrToDate(data.createdAt);
  return {
    createdAt: data.createdAt,
    createdAtISO: createdAtDate.toISOString(),
    createdAtHumanized: format(createdAtDate, "d 'de' MMMM, y", {
      locale: es,
    }),
    title: data.title,
    contentPreview: data.contentPreview,
    slug,
    categories: data.categories.split(', ').map(transformCategory),
    coverImageUrl: data.coverImageUrl,
    readingTime: Math.round(stats.minutes),
  };
}

export const getBlogListSource = async (
  locale: Locale,
  categorySlug?: string,
) => {
  const postCategories: string[] = [];
  const folders = readdirSync(postDirectory);
  const sources = folders.map(folder => {
    const file = join(postDirectory, folder, `index-${locale}.mdx`);
    const s = readFileSync(file, 'utf-8');

    const stats = readingTime(s);
    const { data } = matter(s) as unknown as {
      content: string;
      data: TMDData;
    };

    const categories = (data.categories as string).split(', ');

    categories.forEach(c => {
      if (!postCategories.includes(c)) {
        postCategories.push(c);
      }
    });

    return {
      ...data,
      ...formatMDData(folder, data, stats),
      slug: folder,
    };
  });

  // Filter by categorySlug if the value exists
  const categoriesFiltered = categorySlug
    ? sources.filter(s => s.categories.find(c => c.slug === categorySlug))
    : sources;

  const categoriesTransformed = postCategories.map(transformCategory);

  const sourcesOrdered = categoriesFiltered.sort((a, b) => {
    const date1 = transformStrToDate(a.createdAt);
    const date2 = transformStrToDate(b.createdAt);

    return date2.getTime() - date1.getTime();
  });

  return {
    postList: sourcesOrdered,
    postCategories: categoriesTransformed,
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
  const stats = readingTime(s);

  const { content, data } = matter<string, any>(s) as unknown as {
    content: string;
    data: TMDData;
  };

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
    data: formatMDData(slug, data, stats),
  };
};
