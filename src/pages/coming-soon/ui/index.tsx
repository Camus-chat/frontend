import Image from 'next/image';

const ComingSoon = () => {
  return (
    <div className='flex justify-center'>
      <article className='mt-40 grid grid-cols-2 justify-around gap-5 bg-white'>
        <Image
          src='/images/comingsoon.svg'
          alt='이미지'
          width={480}
          height={720}
        />
        <section className='flex flex-col justify-center gap-4 bg-transparent pb-20'>
          <div className='flex flex-row items-center justify-center bg-transparent'>
            <Image src='/images/logo.svg' alt='이미지' width={64} height={64} />
            <h1 className='ml-4 text-center text-5xl font-semibold text-black'>
              COMING SOON
            </h1>
          </div>
          <p className='bg-transparent text-center text-xl text-black'>
            AI 안전 채팅을 통해 당신을 지켜드립니다.
          </p>
        </section>
      </article>
    </div>
  );
};

export default ComingSoon;
