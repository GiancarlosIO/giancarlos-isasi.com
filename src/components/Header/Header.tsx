import LinkNext from 'next/link';

import WbSunny from '@material-ui/icons/WbSunny';
import NightsStay from '@material-ui/icons/NightsStay';

import { motion } from 'framer-motion';

import Link from '@/components/Link';
import { useTheme } from '@/theme';

const links = [
  {
    url: '/blog',
    label: 'Blog',
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

const Header = props => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="relative">
      <div style={{ height: 53 }} />
      <header
        className="fixed top-0 z-50 w-full flex justify-between items-center dark:bg-gray-800"
        style={{
          width: 1100,
        }}
      >
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
              className="mr-2 text-purple-500 font-bold duration-300 ease-in-out transition-colors hover:text-purple-800 dark:hover:text-purple-400"
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
      </header>
    </div>
  );
};

export default Header;
