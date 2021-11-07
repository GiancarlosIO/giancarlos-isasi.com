import { usePageContext } from '@/views/Homepage/context';

import { PostCardV2 } from '@/components';

const ArticleList = () => {
  const { posts } = usePageContext();

  return (
    <div className="pt-10 grid md:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <div key={index} className="">
          <PostCardV2 key={index} {...post} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
