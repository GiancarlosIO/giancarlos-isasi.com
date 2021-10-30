import { useTranslation } from '@/pages/Homepage/hooks';
import { usePageContext } from '@/pages/Homepage/context';

import styled from 'styled-components';

import { PostCardV2 } from '@/components';

const Section = styled.div``;

const ArticleList = () => {
  const { t } = useTranslation();
  const { posts } = usePageContext();

  return (
    <Section className="pt-10 grid md:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <div key={index} className="">
          <PostCardV2 key={index} {...post} />
        </div>
      ))}
    </Section>
  );
};

export default ArticleList;
