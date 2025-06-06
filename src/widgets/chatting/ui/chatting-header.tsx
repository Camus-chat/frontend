import { CardHeader } from '@heroui/react';

export const ChattingHeader: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <CardHeader className='item-center z-0 flex border-b-1 border-gray-100 pl-1 pt-2'>
      <div className='flex items-center justify-start gap-1'>{children}</div>
    </CardHeader>
  );
};
