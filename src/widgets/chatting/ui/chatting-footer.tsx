import { CardFooter } from '@heroui/card';
import { Input } from '@heroui/input';

import { Button, SendIcon } from '@/shared/ui';

const ChattingFooter = () => {
  return (
    <CardFooter className='p-0'>
      <Input
        placeholder='메시지 입력'
        classNames={{
          inputWrapper: 'pr-1',
        }}
        radius='full'
        endContent={
          <Button size='sm' color='primary' radius='full' isIconOnly>
            <SendIcon size={18} />
          </Button>
        }
      />
    </CardFooter>
  );
};

export default ChattingFooter;
