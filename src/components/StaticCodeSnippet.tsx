import React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import themeDark from 'prism-react-renderer/themes/nightOwl';
import themeLight from 'prism-react-renderer/themes/nightOwlLight';

import { useTheme } from '@/theme';

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;

const StaticCodeSnippet: React.FC<{ children: string; className: string }> = ({
  children,
  className: classNameProp,
}) => {
  const { theme } = useTheme();
  const language = classNameProp.replace(/language-/, '') as Language;
  const themeEditor = theme === 'light' ? themeLight : themeDark;

  return (
    <div className="mb-8">
      <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-md">
        <Highlight
          {...defaultProps}
          theme={{
            ...themeEditor,
            plain: {
              ...themeEditor.plain,
              backgroundColor: 'transparent',
              overflow: 'hidden',
              fontWeight: 'bold',
            },
          }}
          code={children.trim()}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => {
            return (
              <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <Line key={i} {...getLineProps({ line, key: i })}>
                    {/* <LineNo>{i + 1}</LineNo> */}
                    <LineContent>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </LineContent>
                  </Line>
                ))}
              </Pre>
            );
          }}
        </Highlight>
      </div>
    </div>
  );
};

export default StaticCodeSnippet;
