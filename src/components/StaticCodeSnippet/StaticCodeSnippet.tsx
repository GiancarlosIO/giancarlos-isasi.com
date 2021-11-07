import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import themeDark from 'prism-react-renderer/themes/nightOwl';
import themeLight from 'prism-react-renderer/themes/nightOwlLight';
import rangeParser from 'parse-numeric-range';

import { useTheme } from '@/theme';
import styles from './StaticCodeSnippet.module.scss';

// Create a closure that determines if we have
// to highlight the given index
const calculateLinesToHighlight = (meta: string) => {
  const RE = /{([\d,-]+)}/;
  if (RE.test(meta)) {
    const r = RE.exec(meta);
    if (r) {
      const strlineNumbers = r[1];
      const lineNumbers = rangeParser(strlineNumbers);
      return (index: number) => lineNumbers.includes(index + 1);
    }
    return () => false;
  } else {
    return () => false;
  }
};

const StaticCodeSnippet: React.FC<{
  children: string;
  className: string;
  metastring: string;
}> = ({ children, className: classNameProp, metastring }) => {
  const { theme } = useTheme();
  const language = classNameProp.replace(/language-/, '') as Language;
  const themeEditor = theme === 'light' ? themeLight : themeDark;
  const highlightLine =
    theme === 'light' ? 'highlight-line' : 'highlight-line-dark';

  const shouldHighlightLine = calculateLinesToHighlight(metastring);

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
              overflow: 'auto',
              fontWeight: 'bold',
            },
          }}
          code={children.trim()}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => {
            return (
              <pre className={`${className} ${styles.pre}`} style={style}>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i });
                  if (shouldHighlightLine(i)) {
                    lineProps.className = `${lineProps.className} ${highlightLine}`;
                  }
                  return (
                    <line
                      key={i}
                      {...lineProps}
                      className={`${lineProps.className || ''} ${styles.line}`}
                    >
                      {/* <LineNo>{i + 1}</LineNo> */}
                      <span className={styles['line-content']}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token, key })} />
                        ))}
                      </span>
                    </line>
                  );
                })}
              </pre>
            );
          }}
        </Highlight>
      </div>
    </div>
  );
};

export default StaticCodeSnippet;
