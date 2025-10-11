import { HeroUIProvider } from '@heroui/react';
import type { Preview } from '@storybook/nextjs-vite';

import '@/app/styles';

const preview: Preview = {
  decorators: [
    (Story) => (
      <HeroUIProvider className='flex min-h-screen w-screen flex-col'>
        <Story />
      </HeroUIProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
