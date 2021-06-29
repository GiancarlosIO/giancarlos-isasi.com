import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';

import Header from '@/components/Header';
import Container from '@/components/Container';

import { useTheme } from '@/theme';

const AboutMe = () => {
  const { t } = useTranslation('about-me');
  return (
    <div className="text-gray-800 dark:text-white dark:bg-gray-800 overflow-x-hidden pb-20">
      <NextSeo
        title="Giancarlos Isasi - Mr N"
        description={t('SEO_DESCRIPTION')}
        canonical="https://mr-nexus.com/about-me/"
        openGraph={{
          url: 'https://mr-nexus.com/about-me/',
          title: 'Giancarlos Isasi - Mr N',
          description: t('SEO_DESCRIPTION'),
          images: [
            {
              url: 'https://mr-nexus.com/img/og-image.jpg',
              width: 1280,
              height: 853,
              alt: 'Mr N',
            },
          ],
          site_name: 'Giancarlos Isasi - Mr N',
        }}
        twitter={{
          handle: '@handle',
          site: '@mr-nexus.com',
          cardType: 'summary_large_image',
        }}
      />
      <Container>
        <Header />
      </Container>
      <main></main>
    </div>
  );
};

export default AboutMe;
