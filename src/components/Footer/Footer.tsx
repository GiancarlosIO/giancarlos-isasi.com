import * as React from 'react';

import { Container, Link } from '@/components';
import { headerLinks, linkClasses, socialMediaLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-purple-50 dark:bg-gray-700 dark:text-white">
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
          <div className="flex-shrink-0 flex flex-col lg:flex-row">
            {socialMediaLinks.map(link => (
              <Link
                key={link.url}
                href={link.url}
                className="mr-2 text-sm flex-shrink-0 font-bold text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-500"
                target={link.target}
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="font-medium text-center lg:text-right lg:w-1/2">
          <h3 className="text-xl">Giancarlos Isasi - Mr. N</h3>
          <p className="text-xs">
            ©{new Date().getFullYear()} Giancarlos Isasi (Mr. N) - All Rights
            Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
