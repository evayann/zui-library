import { componentWrapperDecorator } from '@storybook/angular';

export const noBorder = componentWrapperDecorator(
  (story) => `<div style="width: 100vw; height: 100vh;">${story}</div>`,
);
