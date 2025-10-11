import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SignUpForm } from './form';

const meta = {
  title: 'Page/SignUp/Form',
  component: SignUpForm,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SignUpForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: async (data) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 750);
      });
      alert(JSON.stringify(data, null, 2));
    },
  },
  render: (args) => {
    return (
      <div className='flex h-screen w-screen items-center justify-center'>
        <div className='flex h-fit w-full max-w-[448px] flex-col gap-1 rounded-md border p-6'>
          <SignUpForm {...args} />
        </div>
      </div>
    );
  },
};
