import * as React from 'react';

import { Container, Link, SocialButtons } from '@/components';
import { headerLinks, linkClasses } from '@/constants';

const Footer = () => {
  return (
    <footer className="dark:text-white">
      <Container className="py-10 flex flex-col lg:flex-row">
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:w-1/2  mb-8 lg:mb-0">
          <div className="flex-shrink-0 flex flex-col lg:flex-row">
            {headerLinks
              .filter(l => !l.onlyMobile)
              .filter(l => !l.onlyHeader)
              .map(link => (
                <Link
                  key={link.url}
                  href={link.url}
                  className={`mr-2 text-sm ${linkClasses} font-medium flex-shrink-0`}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
          </div>
          <div className="flex-shrink-0 flex flex-col lg:flex-row ml-2">
            <SocialButtons />
          </div>
        </div>
        <div className="font-medium text-center lg:text-right lg:w-1/2">
          <h3 className="text-xl">Giancarlos Isasi - TheDecoderJS</h3>
          <p className="text-xs">
            ©{new Date().getFullYear()} Giancarlos Isasi (TheDecoderJS) - All
            Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
