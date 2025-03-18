import { CardBody, CardFooter, CardHeader } from '@heroui/card';

import { Button } from '@/shared/ui';

const EnterChatting: FC<{
  info: Channel.Info;
}> = ({ info }) => {
  return (
    <>
      <CardHeader>
        <h2 className='text-3xl font-semibold'>{info.title}</h2>
      </CardHeader>
      <CardBody>{/* TODO: Add channel content */}</CardBody>
      <CardFooter>
        <Button>참여하기</Button>
      </CardFooter>
    </>
  );
};

export default EnterChatting;
