'use client';

import { Button } from '@/shared/ui';
import ServiceContent from '@/widgets/service-content';

const ChattingErrorPage: ErrorPage = ({ error, reset }) => {
  return (
    <ServiceContent>
      <ServiceContent.MainItem title='채팅'>
        <div className='flex h-full flex-col items-center justify-center gap-4 text-center text-sm text-default-500'>
          {error.message}
          <Button size='sm' variant='flat' onClick={reset}>
            새로 고침
          </Button>
        </div>
      </ServiceContent.MainItem>
    </ServiceContent>
  );
};

export default ChattingErrorPage;
