import '../src/app/styles/globals.scss';
import * as NextImage from 'next/image';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { addDecorator } from '@storybook/react';

import { RouterContext } from "next/dist/shared/lib/router-context";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

addDecorator(storyFn => (
  <I18nextProvider i18n={i18n}>{storyFn()}</I18nextProvider>
));
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    locale: "en" // optional
  },
};