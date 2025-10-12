import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import NotFound from './index';

const meta = {
  title: 'Page/NotFound',
  component: NotFound,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
