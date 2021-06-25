import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Homepage from '@/pages/Homepage';

export default Homepage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const i18nProps = await serverSideTranslations(locale, [
    'common',
    'homepage',
  ]);
  return {
    props: {
      ...i18nProps,
    },
  };
};
