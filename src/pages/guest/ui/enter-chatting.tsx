import { CardBody, CardFooter, CardHeader } from '@heroui/card';

import { MessageReceived } from '@/features/messages';

const EnterChatting: FC<{
  children: ReactNode;
  info: Channel.Info;
}> = ({ info, children }) => {
  return (
    <>
      <CardHeader>
        <h2 className='text-3xl font-semibold'>{info.title}</h2>
      </CardHeader>
      <CardBody>
        <MessageReceived message={info.content} time='' sender={info} isFirst />
      </CardBody>
      <CardFooter className='flex-col gap-2'>{children}</CardFooter>
    </>
  );
};

export default EnterChatting;
