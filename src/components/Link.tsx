import Link from 'next/link';

const LinkComponent: React.FC<{
  href: string;
  className?: string;
  target?: string;
}> = ({ children, href, className, target }) => {
  return (
    <span className={`rounded py-2 px-3 cursor-pointer ${className}`}>
      <Link href={href} passHref>
        <a href={href} target={target}>
          {children}
        </a>
      </Link>
    </span>
  );
};

export default LinkComponent;
