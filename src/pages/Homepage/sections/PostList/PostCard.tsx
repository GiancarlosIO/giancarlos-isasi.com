import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ArticleProps = {
  title: string;
  contentPreview: string;
  slug: string;
};

const ArticleCard: React.FC<ArticleProps> = ({
  title,
  contentPreview,
  slug,
  createdAt,
}) => {
  return (
    <article className="py-4 flex flex-row gap-4 dark:text-white">
      <div>
        <h3 className="font-bold text-xl mb-4 transition-colors duration-300 ease-in-out hover:text-blue-600 ">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        {createdAt}
        <p className="mb-2">{contentPreview}</p>
        <button className="font-bold text-white py-1 px-2 bg-blue-600 rounded">
          Leer más
        </button>
      </div>
      {/* <div className="flex-shrink-0">
        <Link href={url} passHref>
          <a href={url} className="block">
            <Image
              placeholder="blur"
              blurDataURL="/img/placeholder-1x1.png"
              src="https://www.itfluence.com/wp-content/uploads/2020/10/g-suite-cambia-a-google-workspace.jpg"
              loader={({ src }) => src}
              width="240px"
              height="224px"
              alt={title}
              className="rounded h-56 w-60 object-cover"
            />
          </a>
        </Link>
      </div> */}
    </article>
  );
};

export default ArticleCard;
