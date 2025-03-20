import Header from '@/widgets/header';

import AuthProvider from '../provider/auth';

const GuestChatLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className='grid size-full grid-rows-[auto,1fr]'>
      <AuthProvider>
        <Header className='max-w-none' />
        <main className='relative md:bg-default-100'>{children}</main>
      </AuthProvider>
    </div>
  );
};

export default GuestChatLayout;
