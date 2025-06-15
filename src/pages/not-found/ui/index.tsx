import Image from 'next/image';

import { BasicLayout } from '@/widgets/basic-layout';

import HomeButton from './home-button';

const ComingSoon = () => {
  return (
    <BasicLayout
      classNames={{ header: 'mx-auto w-full max-w-screen-xl' }}
      isHeaderSticky
    >
      <article className='hero flex size-full flex-col items-center justify-center gap-4 text-center'>
        <h1 className='text-6xl font-bold'>Page not found</h1>
        <p className='text-xl'>
          {`We can't seem to find the page you are looking for.`}
        </p>
        <HomeButton />
        <Image
          src='/images/comingsoon.svg'
          alt='이미지'
          width={480}
          height={720}
        />
      </article>
    </BasicLayout>
  );
};

export default ComingSoon;
