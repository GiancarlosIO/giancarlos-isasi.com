import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';

type AboutMeSEOProps = {};
const AboutMeSEO: React.FC<AboutMeSEOProps> = props => {
  const { t } = useTranslation('about-me');
  return (
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
  );
};

export default AboutMeSEO;
