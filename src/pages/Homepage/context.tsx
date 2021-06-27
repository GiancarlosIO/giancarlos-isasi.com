import * as React from 'react';
import { PostPreview, Category } from '@/types';

type State = {
  posts: PostPreview[];
  categories: Category[];
};

const HomepageContext = React.createContext<State | undefined>(undefined);

export const HomepageContextProvider: React.FC<State> = ({
  children,
  posts,
  categories,
}) => {
  return (
    <HomepageContext.Provider
      value={{
        posts,
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
