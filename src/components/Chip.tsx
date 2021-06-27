import Link from 'next/link';

type ChipProps = {
  label: string;
  url: string;
};

const Chip: React.FC<ChipProps> = props => {
  return (
    <Link href={props.url} passHref>
      <a
        href={props.url}
        className="text-sm font-medium text-white inline-block px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        {props.label}
      </a>
    </Link>
  );
};

export default Chip;
