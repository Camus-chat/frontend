import Link from 'next/link';
import { tv } from 'tailwind-variants';

interface Props {
  business: boolean;
  className?: string;
}

const createStyle = tv({
  slots: {
    base: 'flex items-end text-foreground',
    text: 'text-xl font-semibold leading-none md:text-3xl',
  },
});

const Logo = ({ business, className }: Props) => {
  let path = '/';

  if (process.env.NODE_ENV === 'development') {
    if (business) {
      path = '/biz';
    }
  }

  const styles = createStyle();

  return (
    <Link href={path} className={styles.base({ className })}>
      <svg
        className='mr-0.5 size-6 md:mr-1 md:size-10'
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M27 10V27H10V10H27ZM40 40H10V30H30V10H40V40Z'
          fill='currentColor'
        />
        <path d='M30 10H27V3H3V27H10V30H0V0H30V10Z' fill='currentColor' />
      </svg>
      <span className={styles.text()}>CAMUS</span>
      {business && (
        <span className={styles.text({ class: 'font-light' })}>BIZ</span>
      )}
    </Link>
  );
};

export default Logo;
