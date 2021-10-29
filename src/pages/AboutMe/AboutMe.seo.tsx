import { NextSeo } from 'next-seo';
import { useTranslation } from 'next-i18next';

type AboutMeSEOProps = {};
const AboutMeSEO: React.FC<AboutMeSEOProps> = props => {
  const { t } = useTranslation('about-me');
  return (
    <NextSeo
      title="Giancarlos Isasi - TheDecoderJS"
      description={t('GRETTINGS')}
      canonical="https://giancarlos-isasi.com/about-me/"
      openGraph={{
        url: 'https://giancarlos-isasi.com/about-me/',
        title: 'Giancarlos Isasi - TheDecoderJS',
        description: t('GRETTINGS'),
        images: [
          {
            url: 'https://giancarlos-isasi.com/img/og-image.jpg',
            width: 1280,
            height: 853,
            alt: 'TheDecoderJS',
          },
        ],
        site_name: 'Giancarlos Isasi - TheDecoderJS',
      }}
      twitter={{
        handle: '@handle',
        site: '@giancarlos-isasi.com',
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default AboutMeSEO;
