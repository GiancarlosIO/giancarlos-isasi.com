import * as React from 'react';
import LinkNext from 'next/link';

import * as bodyScrollLock from 'body-scroll-lock';

import clsx from 'clsx';

import WbSunny from '@material-ui/icons/WbSunny';
import NightsStay from '@material-ui/icons/NightsStay';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { motion } from 'framer-motion';

import { iconNormalizedStyled } from '@/constants/styles';
import Link from '@/components/Link';
import { useTheme } from '@/theme';

import { ButtonRotate } from './UI';

import { headerLinks, linkClasses } from '@/constants';
import styles from './Header.module.scss';

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
      <header
        className={`w-full flex justify-between items-center py-2 md:py-4 ${styles['header-inner']}`}
      >
        <LinkNext href="/" passHref>
          <a
            href="/"
            className="text-2xl md:text-3xl rounded py-2 cursor-pointer"
          >
            <span className="font-kaushan font-bold">Giancarlos Isasi</span>
          </a>
        </LinkNext>

        <div className="flex items-center">
          <div className="mr-4 sm:mr-6 lg:mr-0">
            {headerLinks
              .filter(l => !l.onlyMobile)
              .map(link => (
                <Link
                  key={link.url}
                  href={link.url}
                  className={`hidden lg:inline-block mr-2 ${linkClasses}`}
                  target={link.target}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            <motion.button
              type="button"
              onClick={() => toggleTheme()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6"
            >
              {theme === 'light' ? (
                <WbSunny style={iconNormalizedStyled} />
              ) : (
                <NightsStay
                  style={{
                    ...iconNormalizedStyled,
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
                    ...iconNormalizedStyled,
                    fontSize: 40,
                    color: theme === 'light' ? 'black' : 'white',
                  }}
                />
              ) : (
                <MenuIcon
                  style={{
                    ...iconNormalizedStyled,
                    fontSize: 40,
                    color: theme === 'light' ? 'black' : 'white',
                  }}
                />
              )}
            </ButtonRotate>
            <div
              className={clsx(
                'fixed inset-0 w-screen h-screen bg-white transition-opacity duration-350 ease-in-out',
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
                {headerLinks.map((link, index) => (
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
        </div>
      </header>
    </div>
  );
};

export default Header;
