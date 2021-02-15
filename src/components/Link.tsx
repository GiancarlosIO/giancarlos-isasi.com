import Link from 'next/link';

const LinkComponent: React.FC<{
  href: string;
  className?: string;
}> = ({ children, href, className }) => {
  return (
    <span className={`rounded py-2 px-3 cursor-pointer ${className}`}>
      <Link href={href}>{children}</Link>
    </span>
  );
};

export default LinkComponent;
