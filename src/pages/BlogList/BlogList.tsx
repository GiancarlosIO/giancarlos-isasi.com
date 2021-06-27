import { useTranslation } from 'react-i18next';

import { PostCard, Container, Header } from '@/components';

const BlogList = ({ postList }) => {
  const { t } = useTranslation('blog-list');

  return (
    <div className="text-gray-800 dark:text-white dark:bg-gray-800 overflow-x-hidden pb-20 min-h-screen">
      <Container>
        <Header />
        <div className="pt-4 lg:pt-20">
          <h1 className="font-bold text-center text-xl lg:text-3xl mb-4 lg:mb-0 text-yellow-500 dark:text-yellow-300">
            {t('MAIN_TITLE').toUpperCase()}:
          </h1>
          <div
            className="mx-auto"
            style={{
              maxWidth: 800,
            }}
          >
            <section>
              {postList.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogList;
