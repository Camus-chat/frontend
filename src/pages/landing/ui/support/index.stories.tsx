import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Hero } from '@/shared/ui';

import SupportDescription from './description';
import SupportForm from './form';

const Support = () => {
  return (
    <Hero className='bg-[url(/images/background-support.svg)] bg-cover bg-center bg-no-repeat'>
      <SupportDescription />
      <SupportForm />
    </Hero>
  );
};

const meta = {
  title: 'Page/Landing/SupportForm',
  component: Support,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Support>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
