import Image from 'next/image';

export default function ComingSoon() {
  return (
    <div className='m-0 flex h-full w-full justify-around bg-white'>
      <div className='ml-52 flex items-center bg-transparent [&>*]:bg-transparent'>
        <Image
          src='/images/comingsoon.svg'
          alt='이미지'
          width={480}
          height={720}
        />
      </div>
      <div className='mr-52 flex flex-col justify-center bg-transparent pb-20'>
        <div className='my-8 flex flex-row items-center justify-center bg-transparent'>
          <Image src='/images/logo.svg' alt='이미지' width={64} height={64} />
          <p className='ml-4 text-center text-5xl font-[600] text-black'>
            COMING SOON
          </p>
        </div>
        <div className='my-4 bg-transparent text-center text-2xl font-[400] text-black'>
          AI 안전 채팅을 통해 당신을 지켜드립니다.
        </div>
      </div>
    </div>
  );
}
