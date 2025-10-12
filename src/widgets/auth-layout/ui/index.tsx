import { Logo, layout } from '@/shared/ui';

interface Props {
  children: ReactNode;
  title: string;
  subtitle?: string;
  bottomContent?: ReactNode;
}

const AuthLayout = ({ children, title, subtitle, bottomContent }: Props) => {
  const styles = layout();

  return (
    <>
      <header className={styles.header()}>
        <Logo business={false} />
      </header>
      <main className={styles.main()}>
        <div className='mb-6 mt-12 flex flex-col items-center'>
          <h1 className={styles.title({ class: 'text-center' })}>{title}</h1>
          {subtitle && (
            <span className='mt-4 text-center text-base font-light text-gray-700'>
              {subtitle}
            </span>
          )}
        </div>
        <div className='flex w-full max-w-[448px] flex-col gap-1 rounded-md border p-6'>
          {children}
        </div>
        {bottomContent && <div className='py-6'>{bottomContent}</div>}
      </main>
    </>
  );
};

export default AuthLayout;
