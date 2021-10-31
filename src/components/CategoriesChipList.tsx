import { useTranslation } from 'next-i18next';

import Chip from '@/components/Chip';
import type { Category } from '@/types';

const CategoriesChipList: React.FC<{ categories: Category[] }> = ({
  categories,
}) => {
  const { i18n } = useTranslation();
  return (
    <section className="h-full">
      <div className="sticky top-8">
        <h2 className="font-bold text-xs md:text-sm mb-6">
          {(i18n.language === 'en' ? 'Categories' : 'Categorías').toUpperCase()}
          :
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

export default CategoriesChipList;
