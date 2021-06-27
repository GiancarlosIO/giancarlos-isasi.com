import * as React from 'react';
import LinkNext from 'next/link';
import styled from 'styled-components';

import * as bodyScrollLock from 'body-scroll-lock';

import clsx from 'clsx';

import WbSunny from '@material-ui/icons/WbSunny';
import NightsStay from '@material-ui/icons/NightsStay';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { motion } from 'framer-motion';

import Link from '@/components/Link';
import { useTheme } from '@/theme';

import { ButtonRotate } from './UI';

const links = [
  {
    url: '/blog',
    label: 'Blog',
  },
  {
    url: '/blog/categories/snippets/',
    label: 'Snippets',
  },
  {
    url: '/experiments',
    label: 'Experimentos',
  },
  {
    url: '/about',
    label: 'Sobre mí',
  },
  {
    url: '/contact',
    label: 'Contáctame',
  },
];

const HeaderInner = styled.header`
  width: 100%;
  @media (min-width: 1200px) {
    width: 1100px;
  }
`;

const linkClasses =
  ' font-bold duration-300 ease-in-out transition-colors text-purple-500 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300';

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { toggleTheme, theme } = useTheme();

  const toggleOpen = () => {
    setOpen(v => !v);
  };

  React.useEffect(() => {
    if (open) {
      bodyScrollLock.disableBodyScroll(document.body);
    } else {
      bodyScrollLock.enableBodyScroll(document.body);
    }
  }, [open]);

  return (
    <div className="relative z-20">
      <HeaderInner className="w-full flex justify-between items-center">
        <LinkNext href="/">
          <span className="text-3xl rounded py-2 cursor-pointer">
            <span className="font-reggae text-purple-500">-N</span>
          </span>
        </LinkNext>

        <div>
          {links.map(link => (
            <Link
              key={link.url}
              href={link.url}
              className={`hidden lg:inline-block mr-2 ${linkClasses}`}
            >
              <span>{link.label}</span>
            </Link>
          ))}
          <motion.button
            type="button"
            onClick={() => toggleTheme()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' ? (
              <WbSunny />
            ) : (
              <NightsStay
                style={{
                  color: 'white',
                }}
              />
            )}
          </motion.button>
        </div>

        {/* Collapse */}
        <div className="relative block lg:hidden">
          <ButtonRotate open={open} onClick={toggleOpen}>
            {open ? (
              <CloseIcon
                style={{
                  fontSize: 40,
                  color: theme === 'light' ? 'black' : 'white',
                }}
              />
            ) : (
              <MenuIcon
                style={{
                  fontSize: 40,
                  color: theme === 'light' ? 'black' : 'white',
                }}
              />
            )}
          </ButtonRotate>
          <div
            className={clsx(
              'fixed inset-0 w-screen h-screen bg-white dark:bg-gray-800 transition-opacity duration-350 ease-in-out',
              {
                'pointer-events-none': !open,
                'opacity-1': open,
                'opacity-0': !open,
              },
            )}
            style={{
              zIndex: 40,
            }}
          >
            <div className="w-full h-full p-8 md:p-16 lg:p-0 flex flex-col relative">
              {links.map((link, index) => (
                <motion.div
                  initial={false}
                  animate={open ? 'open' : 'closed'}
                  variants={{
                    closed: {
                      x: -300,
                    },
                    open: {
                      x: 0,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 0.05 * index,
                  }}
                  key={link.url}
                  className="py-3"
                >
                  <Link href={link.url} className={`mr-2 ${linkClasses}`}>
                    <span
                      role="button"
                      tabIndex={index}
                      onClick={toggleOpen}
                      onKeyUp={toggleOpen}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <button type="button"></button>
            </div>
          </div>
        </div>
      </HeaderInner>
    </div>
  );
};

export default Header;
