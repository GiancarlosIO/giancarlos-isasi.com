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
    <header className="pt-6 flex justify-between items-center">
      <Link href="/" className="text-3xl rounded-lg inline">
        <span className="font-reggae text-purple-500">-N</span>
      </Link>

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
  );
};

export default Header;
