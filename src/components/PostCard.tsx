import * as React from 'react';
import Link from 'next/link';

import { PostPreview } from '@/types';

const ArticleCard: React.FC<PostPreview> = ({
  title,
  contentPreview,
  slug,
  createdAt,
}) => {
  const url = `/blog/${slug}`;
  return (
    <article className="py-2 lg:py-6 mb-4 lg:mb-0 flex flex-row gap-4 dark:text-white">
      <div>
        <h3 className="font-bold lg:text-xl transition-colors duration-300 ease-in-out hover:text-blue-600 ">
          <Link href={url}>{title}</Link>
        </h3>
        <span className="font-bold text-sm text-gray-500">{createdAt}</span>
        <p className="mb-4 mt-3 line-clamp">{contentPreview}</p>
        <Link href={url} passHref>
          <a
            href={url}
            className="font-bold text-white inline-block py-1 px-2 rounded transition-colors ease-in-out duration-300 bg-blue-600 hover:bg-blue-800"
          >
            Leer más
          </a>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
