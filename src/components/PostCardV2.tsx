import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { PostPreview } from '@/types';

const PostCard: React.FC<PostPreview> = ({
  title,
  contentPreview,
  slug,
  createdAt,
  coverImageUrl,
}) => {
  const url = `/blog/${slug}`;
  return (
    <article
      className="flex flex-col dark:text-white rounded-3xl transition-transform ease-in-out duration-500 hover:-translate-y-4 w-full"
      style={{
        backgroundColor: '#26263d',
      }}
    >
      <Link href={url} passHref>
        <a href={url} className="w-full block bg-white rounded-t-3xl">
          <Image
            src={coverImageUrl}
            width={352}
            height={200}
            alt={title}
            objectFit="contain"
            objectPosition="center"
            className="rounded-t-3xl"
          />
        </a>
      </Link>

      <div className="p-4">
        <Link href={url} passHref>
          <a href={url}>
            <h3
              className="font-bold lg:text-xl transition-colors duration-300 ease-in-out hover:text-red-500"
              style={{
                minHeight: '3.5rem',
              }}
            >
              {title}
            </h3>
          </a>
        </Link>
        {/* <p className="mb-4 mt-3 line-clamp">{contentPreview}</p> */}
        <span className="inline-block font-normal text-sm mt-4">
          {createdAt}
        </span>
      </div>
    </article>
  );
};

export default PostCard;
