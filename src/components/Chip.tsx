import Link from 'next/link';

type ChipProps = {
  label: string;
  url: string;
  mini?: boolean;
};

const Chip: React.FC<ChipProps> = ({ mini, url, label }) => {
  const fontSize = mini ? 'text-xs' : 'text-sm';

  return (
    <Link href={url} passHref>
      <a
        href={url}
        className={`${fontSize} font-medium text-gray-900 dark:text-white bg-yellow-300 dark:bg-yellow-500 rounded-2xl h-8 flex items-center justify-center px-4`}
        style={{
          minWidth: mini ? 46 : 60,
        }}
      >
        {label}
      </a>
    </Link>
  );
};

export default Chip;
