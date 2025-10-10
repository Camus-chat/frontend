import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { LoginForm } from './form';

const meta = {
  title: 'Page/SignIn/Form',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: async (account) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 750);
      });
      alert(`Email: ${account.username}\nPassword: ${account.password}`);
    },
  },
  render: (args) => {
    return (
      <div className='flex h-screen w-screen items-center justify-center'>
        <div className='flex h-fit w-full max-w-[448px] flex-col gap-1 rounded-md border p-6'>
          <LoginForm {...args} />
        </div>
      </div>
    );
  },
};
