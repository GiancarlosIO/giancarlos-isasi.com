import * as React from 'react';
import { ArticlePreview, Category } from '@/types';

type State = {
  articles: ArticlePreview[];
  categories: Category[];
};

const HomepageContext = React.createContext<State | undefined>(undefined);

export const HomepageContextProvider: React.FC<State> = ({
  children,
  articles,
  categories,
}) => {
  return (
    <HomepageContext.Provider
      value={{
        articles,
        categories,
      }}
    >
      {children}
    </HomepageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = React.useContext(HomepageContext);
  if (context === undefined) {
    throw new Error(
      'usePageContext must be used within a HomepageContextProvider',
    );
  }
  return context;
};
