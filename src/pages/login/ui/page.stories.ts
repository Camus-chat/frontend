import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import SignIn from './page';

const meta = {
  title: 'Page/SignIn',
  component: SignIn,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SignIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
