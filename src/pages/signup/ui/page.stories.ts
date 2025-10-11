import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import SignUp from './page';

const meta = {
  title: 'Page/SignUp',
  component: SignUp,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SignUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
