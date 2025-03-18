import Header from '@/widgets/header';

const GuestChatLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className='grid size-full grid-rows-[auto,1fr]'>
      <Header className='max-w-none md:h-16' />
      <main className='relative md:bg-default-100'>{children}</main>
    </div>
  );
};

export default GuestChatLayout;
