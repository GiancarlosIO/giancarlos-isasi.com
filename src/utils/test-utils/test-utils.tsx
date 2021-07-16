// test-utils.js
import { render, queries } from '@testing-library/react';
import * as customQueries from './custom-queries';
// @ts-ignore
const customRender = (ui, options) =>
  render(ui, { queries: { ...queries, ...customQueries }, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
