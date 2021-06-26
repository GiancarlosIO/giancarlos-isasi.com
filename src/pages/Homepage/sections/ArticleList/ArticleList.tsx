import { useTranslation } from '@/pages/Homepage/hooks';
import { usePageContext } from '@/pages/Homepage/context';

import ArticleCard from './ArticleCard';

const ArticleList = () => {
  const { t } = useTranslation();
  const { articles } = usePageContext();

  return (
    <section>
      <h2 className="font-bold text-sm text-purple-500 mb-4">
        {t('BLOG_SECTION_TITLE').toUpperCase()}:
      </h2>
      <div>
        {articles.map(article => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
};

export default ArticleList;
