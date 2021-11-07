import * as React from 'react';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Rocket2 from '@/icons/Rocket2';

import cssClasses from './AboutMe.module.css';

const MAX_STEPS = 6;

const AboutMe = () => {
  const { t } = useTranslation('about-me');
  const [currentStep, setCurrentStep] = React.useState(0);
  const [startNavigation, setStartNavigation] = React.useState(false);
  const [rocketPosition, setRocketPosition] = React.useState({ x: 0, y: 0 });

  const onClickNext = () => {
    if (!startNavigation) {
      setStartNavigation(true);
    }

    if (currentStep < MAX_STEPS) {
      setRocketPosition(prev => ({
        x: prev.x + 100,
        y: prev.y === 100 ? -100 : 100,
      }));
      setCurrentStep(prev => prev + 1);
    }
  };

  const onClickPrev = () => {
    setRocketPosition(prev => ({
      x: prev.x >= 100 ? prev.x - 100 : 0,
      y: prev.x <= 100 ? 0 : prev.y === 100 ? -100 : 100,
    }));
    setCurrentStep(prev => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <React.Fragment>
      <div className="fixed inset-0 text-gray-800 bg-no-repeat bg-cover bg-gray-900 overflow-hidden flex justify-center items-center">
        <div
          style={{
            width: 1000,
            height: 700,
          }}
          className="bg-gray-800 rounded"
        >
          <div
            className="absolute transition-transform duration-500 ease-in-out w-24 h-16 flex justify-center items-center"
            style={{
              transform: `translate(${rocketPosition.x}px, ${rocketPosition.y}px)`,
              top: 'calc(50% - 32px)',
            }}
          >
            {currentStep > 0 ? (
              <div
                className="absolute top-0 bg-white p-4 rounded"
                style={{
                  top: 'calc(-120% - 20px)',
                  left: 'calc(-50% - 40px)',
                  boxShadow: '0px 0px 20px white',
                  width: 380,
                }}
              >
                <span
                  className="absolute text-white text-xs bg-yellow-500 rounded p-1"
                  style={{
                    top: -12,
                    left: 'calc(50% - 42px)',
                  }}
                >
                  2015-2016
                </span>
                <span className="text-blue-500 font-bold text-sm">
                  Web Developer
                </span>
                <p className="text-sm">
                  Durante 6 meses ayudé en la mejora y administración del sitio
                  web del Hospital Regional de Ica Perú.
                  <br />
                  Tecnologías usadas: html, sass, jquery, joomla y php.
                </p>
              </div>
            ) : null}
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
      </div>
      <NextSeo
        title="Giancarlos Isasi - TheDecoderJS"
        description={t('SEO_DESCRIPTION')}
        canonical="https://giancarlos-isasi.com/about-me/"
        openGraph={{
          url: 'https://giancarlos-isasi.com/about-me/',
          title: 'Giancarlos Isasi - TheDecoderJS',
          description: t('SEO_DESCRIPTION'),
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
    </React.Fragment>
  );
};

export default AboutMe;
