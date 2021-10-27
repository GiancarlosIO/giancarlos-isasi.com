import Link from 'next/link';

type ChipProps = {
  label: string;
  url: string;
  mini?: boolean;
};

const Chip: React.FC<ChipProps> = props => {
  const padding = props.mini ? 'px-2 py-1' : 'px-4 py-2';
  const fontSize = props.mini ? 'text-xs' : 'text-sm';

  return (
    <Link href={props.url} passHref>
      <a
        href={props.url}
        className={`${fontSize} font-medium text-white ${padding} inline-block rounded-lg transition-colors duration-200 ease-in-out bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700`}
      >
        {props.label}
      </a>
    </Link>
  );
};

export default Chip;
