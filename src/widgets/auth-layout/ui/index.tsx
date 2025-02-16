import { Logo } from '@/shared/ui';

import { authStyles } from './styles';

interface Props {
  children: ReactNode;
  title: string;
  subtitle?: string;
  bottomContent?: ReactNode;
}

const AuthLayout = ({ children, title, subtitle, bottomContent }: Props) => {
  const { wrapper, header, main, title: titleStyle, box } = authStyles();
  return (
    <div className={wrapper()}>
      <header className={header()}>
        <Logo business={false} />
      </header>
      <main className={main()}>
        <div className='mb-6 flex flex-col items-center'>
          <h1 className={titleStyle()}>{title}</h1>
          {subtitle && (
            <span className='mt-4 text-center text-base font-light text-gray-700'>
              {subtitle}
            </span>
          )}
        </div>
        <div className={box()}>{children}</div>
        {bottomContent && <div className='py-6'>{bottomContent}</div>}
      </main>
    </div>
  );
};

export default AuthLayout;
