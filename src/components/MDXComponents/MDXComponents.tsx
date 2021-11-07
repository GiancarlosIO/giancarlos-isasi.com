import WarningIcon from '@material-ui/icons/Warning';
const textElementCommonClasses = 'mb-8 leading-6';

import styles from './MDXComponents.module.scss';

export const H2: React.FC = props => {
  return (
    <h2 className="font-bold text-xl lg:text-3xl text-yellow-500 dark:text-yellow-300 mt-10 mb-4">
      {props.children}
    </h2>
  );
};

export const H3: React.FC = props => {
  return (
    <h3 className="font-bold text-lg lg:text-2xl text-yellow-500 dark:text-yellow-300 mt-10 mb-4">
      {props.children}
    </h3>
  );
};

export const P: React.FC = props => {
  return <p className={`${textElementCommonClasses}`}>{props.children}</p>;
};

export const Ul: React.FC = props => (
  <ul className={`ml-6 list-disc ${textElementCommonClasses}`}>
    {props.children}
  </ul>
);

export const Ol: React.FC = props => (
  <ol className={`ml-6 list-decimal ${textElementCommonClasses}`}>
    {props.children}
  </ol>
);

export const Anchor: React.FC = props => (
  <a target="_blank" className="text-blue-600" {...props}>
    {props.children}
  </a>
);

export const Mark: React.FC = ({ children }) => {
  return (
    <span className="font-bold text-yellow-500 dark:text-yellow-300">
      {children}
    </span>
  );
};

export const Blockquote: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => (
  <blockquote
    className={`relative bg-gray-600 text-white p-4 pt-8 mb-8 rounded${styles.blockquote}`}
  >
    <span
      className="absolute text-yellow-500 dark:text-yellow-300 bg-gray-600 rounded-full p-2"
      style={{
        top: -24,
        right: 'calc(50% - 20px)',
      }}
    >
      <WarningIcon
        style={{
          fontSize: 40,
        }}
      />
    </span>
    {title && (
      <h3 className="font-bold text-yellow-500 dark:text-yellow-300 mb-2">
        {title}
      </h3>
    )}
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  </blockquote>
);
