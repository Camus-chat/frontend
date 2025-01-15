import Link from 'next/link';

import { BIZ_DOMAIN_NAME, DOMAIN_NAME } from '@/shared/config';

interface Props {
  business: boolean;
}

const NavigationBelt = ({ business }: Props) => {
  const businessPath = business ? '/' : BIZ_DOMAIN_NAME;
  const defaultPath = !business ? '/' : DOMAIN_NAME;

  return (
    <div className='wrapper flex text-xs py-2 max-md:hidden'>
      <div className='text-gray-500'>패밀리 서비스</div>
      <Link className='ml-3 hover:text-blue-700' href={defaultPath}>
        개인용
      </Link>
      <Link className='ml-3 hover:text-blue-700' href={businessPath}>
        기업용
      </Link>
    </div>
  );
};

export default NavigationBelt;
