import Link from '@/components/Link';

const Header = props => {
  return (
    <header className="pt-6 flex justify-between items-center">
      <Link href="/" className="text-3xl rounded-lg inline">
        <span className="font-reggae text-white">-N</span>
      </Link>
      <div>
        <Link
          href="/blog"
          className="transition duration-300 ease-in-out transition-colors hover:bg-purple-900 mr-2"
        >
          <span>Blog</span>
        </Link>
        <Link
          href="/about"
          className="transition duration-300 ease-in-out transition-colors hover:bg-purple-900 mr-2"
        >
          <span>Sobre mí</span>
        </Link>
        <Link
          href="/contact"
          className="transition duration-300 ease-in-out transition-colors hover:bg-purple-900"
        >
          <span>Contáctame</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
