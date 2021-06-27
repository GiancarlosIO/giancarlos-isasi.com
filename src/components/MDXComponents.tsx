const textElementCommonClasses = 'mb-8 leading-6';

export const H2: React.FC = props => {
  return (
    <h2 className="font-bold text-3xl text-yellow-500 dark:text-yellow-300 mt-10 mb-4">
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
