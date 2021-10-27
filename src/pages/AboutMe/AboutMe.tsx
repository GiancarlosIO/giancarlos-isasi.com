import * as React from 'react';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Rocket2 from '@/icons/Rocket2';

import cssClasses from './AboutMe.module.css';

const AboutMe = () => {
  const { t } = useTranslation('about-me');
  const [startNavigation, setStartNavigation] = React.useState(false);
  const [rocketPosition, setRocketPosition] = React.useState({ x: 0, y: 0 });

  const onClickNext = () => {
    if (!startNavigation) {
      setStartNavigation(true);
    }
    setRocketPosition(prev => ({
      x: prev.x + 100,
      y: prev.y === 100 ? -100 : 100,
    }));
  };

  const onClickPrev = () => {
    setRocketPosition(prev => ({
      x: prev.x >= 100 ? prev.x - 100 : 0,
      y: prev.x <= 100 ? 0 : prev.y === 100 ? -100 : 100,
    }));
  };

  return (
    <React.Fragment>
      <div className="fixed inset-0 text-gray-800 bg-no-repeat bg-cover bg-gray-900 overflow-hidden">
        <div
          className="absolute transition-transform duration-500 ease-in-out w-24 h-16 flex justify-center items-center"
          style={{
            transform: `translate(${rocketPosition.x}px, ${rocketPosition.y}px)`,
            top: 'calc(50% - 32px)',
          }}
        >
          <Rocket2
            width="60px"
            height="60px"
            className={`inline-block ${cssClasses.bounce}`}
          />
        </div>
        <div
          className="text-2xl text-white absolute left-0 right-0 flex justify-center"
          style={{
            bottom: '15%',
          }}
        >
          <button
            type="button"
            className="p-4 hover:text-yellow-500 transition-colors duration-300 ease-in-out"
            onClick={onClickPrev}
          >
            <ArrowBackIosIcon
              style={{
                fontSize: 40,
              }}
            />
          </button>
          <button
            type="button"
            className="p-4 hover:text-yellow-500 transition-colors duration-300 ease-in-out"
            onClick={onClickNext}
          >
            <ArrowForwardIosIcon
              style={{
                fontSize: 40,
              }}
            />
          </button>
        </div>
      </div>
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
    </React.Fragment>
  );
};

export default AboutMe;
