import styled from 'styled-components';
import WarningIcon from '@material-ui/icons/Warning';
const textElementCommonClasses = 'mb-8 leading-6';

export const H2: React.FC = props => {
  return (
    <h2 className="font-bold text-xl lg:text-3xl text-yellow-500 dark:text-yellow-300 mt-10 mb-4">
      {props.children}
    </h2>
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

const BlockQuoteInner = styled.blockquote`
  p {
    margin-bottom: 8px;
  }
  ul {
    list-style: disc;
    margin-left: 16px;
    li {
      margin-bottom: 8px;
    }
  }
  a {
    &:hover {
      color: rgba(59, 130, 246, 1);
    }
  }
`;

export const Blockquote: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => (
  <BlockQuoteInner className="relative bg-gray-600 text-white p-4 pt-8 mb-8 rounded">
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
  </BlockQuoteInner>
);
