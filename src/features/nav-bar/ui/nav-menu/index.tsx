import Link from 'next/link';

import { NAVIGATIONS } from '@/shared/config';

interface Props {
  business?: boolean;
}

const NavigationMenu = ({ business }: Props) => {
  const menuItems = business ? NAVIGATIONS.business : NAVIGATIONS.personal;

  return (
    <nav className='h-full flex mx-auto'>
      {menuItems.map((item) => (
        <Link
          className='px-4 text-sm font-medium h-full flex items-center hover:text-blue-700'
          key={item.key}
          href={item.path}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationMenu;
