import Image from 'next/image';

import { Logo, layout } from '@/shared/ui';
import { Footer } from '@/widgets/footer';

import HomeButton from './home-button';

const NotFound = () => {
  const styles = layout({ blur: true });

  return (
    <>
      <header className={styles.header()}>
        <div className={styles.logoWrapper()}>
          <Logo business={false} />
        </div>
      </header>
      <main className={styles.main({ class: 'justify-center' })}>
        <article className='flex flex-col items-center gap-4 pb-32 pt-18 text-center'>
          <h1 className='text-6xl font-bold'>Page not found</h1>
          <p className='text-xl'>
            {`We can't seem to find the page you are looking for.`}
          </p>
          <HomeButton />
          <Image
            className='min-w-80'
            src='/images/comingsoon.svg'
            alt='이미지'
            width={480}
            height={720}
          />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
