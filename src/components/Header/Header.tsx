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

import { CircularBgAnimated, ButtonRotate } from './UI';

const links = [
  {
    url: '/blog',
    label: 'Blog',
  },
  {
    url: '/proyects',
    label: 'Proyectos',
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

  console.log({ open });

  return (
    <div className="relative">
      <HeaderInner className="w-full flex justify-between items-center bg-white dark:bg-gray-800">
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
              className="hidden lg:inline-block mr-2 text-purple-500 font-bold duration-300 ease-in-out transition-colors hover:text-purple-800 dark:hover:text-purple-400"
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
              'fixed inset-0 w-screen h-screen dark:bg-gray-800 backdrop-filter backdrop-blur-xl origin-center	',
              {
                'pointer-events-none': !open,
                hidden: !open,
              },
            )}
            style={{
              zIndex: 40,
            }}
          >
            <div className="w-full h-full p-8 md:p-16 lg:p-0 flex flex-col relative">
              {links.map(link => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="mr-2 text-purple-500 font-bold duration-300 ease-in-out transition-colors hover:text-purple-800 dark:hover:text-purple-400"
                >
                  <span>{link.label}</span>
                </Link>
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
