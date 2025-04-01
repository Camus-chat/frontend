import { CardFooter } from '@heroui/card';

export const ChattingFooter: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <CardFooter className='p-0'>{children}</CardFooter>;
};
