import { useTranslation } from '@/pages/Homepage/hooks';
import { usePageContext } from '@/pages/Homepage/context';

import PostCard from './PostCard';

const ArticleList = () => {
  const { t } = useTranslation();
  const { posts } = usePageContext();

  return (
    <section>
      <h2 className="font-bold text-sm text-purple-500 mb-4">
        {t('BLOG_SECTION_TITLE').toUpperCase()}:
      </h2>
      <div>
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default ArticleList;