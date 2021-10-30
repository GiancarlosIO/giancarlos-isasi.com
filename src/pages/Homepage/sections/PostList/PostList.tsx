import { useTranslation } from '@/pages/Homepage/hooks';
import { usePageContext } from '@/pages/Homepage/context';

import { PostCard } from '@/components';

const ArticleList = () => {
  const { t } = useTranslation();
  const { posts } = usePageContext();

  return (
    <section>
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </section>
  );
};

export default ArticleList;
