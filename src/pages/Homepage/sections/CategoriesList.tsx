import { useTranslation } from '@/pages/Homepage/hooks';
import { usePageContext } from '@/pages/Homepage/context';

import Chip from '@/components/Chip';

const CategoriesList: React.FC = () => {
  const { t } = useTranslation();
  const { categories } = usePageContext();
  return (
    <section className="h-full">
      <div className="sticky top-8">
        <h2 className="font-bold text-sm mb-6">
          {t('CATEGORIES_SECTION_TITLE').toUpperCase()}:
        </h2>
        {categories.map(category => (
          <div key={category.name} className="inline-block mb-2 mr-2">
            <Chip label={category.name} url={category.url} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesList;
