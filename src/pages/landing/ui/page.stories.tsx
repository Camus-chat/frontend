import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MemberProvider } from '@/entities/member';

import LandingPage from './page';

const meta = {
  title: 'Page/Landing',
  decorators: [
    (Story) => (
      <MemberProvider member={null}>
        <Story />
      </MemberProvider>
    ),
  ],
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
