import { useTranslation } from 'next-i18next';

import { TWITTER_PROFILE } from '@/constants/social-media';
import { ManCoding } from '../components';
import { SocialButtons } from '@/components';

import styles from '../Homepage.module.scss';

const Hero = () => {
  const { t } = useTranslation('homepage');
  return (
    <div
      className={`pt-2 sm:pt-3 lg:pt-10 lg:pb-12 mx-auto ${styles['hero-section']} ${styles.wrapper}`}
    >
      <div>
        <section className="text-lg md:text-2xl lg:text-3xl font-bold">
          <p>{t('GRETTINGS')}</p>
          <div>
            <span>{t('IAM')}</span>{' '}
            <a
              href={TWITTER_PROFILE}
              rel="noreferrer"
              target="_blank"
              className="inline-block"
            >
              <h1 className="inline-block text-blue-600 hover:underline">
                {t('FULL_NAME')}
              </h1>
            </a>
            {', '}
            <span>{t('BIO_1')}</span>
          </div>
          <p className="my-4 font-normal text-base md:text-xl">
            {t('DESCRIPTION_1')}
          </p>
          <SocialButtons />
        </section>
      </div>
      <div className=" mt-8 mb-4">
        <ManCoding width="100%" height="100%" />
      </div>
    </div>
  );
};

export default Hero;
