'use client';

import { DOMAIN_NAME, ROUTE } from '@/shared/config';
import { Button } from '@/shared/ui';
import { Link } from 'lucide-react';

interface Props {
  link: string;
}

const ButtonLinkCopy = ({ link }: Props) => {
  const handleClick = () => {
    navigator.clipboard
      .writeText(`${DOMAIN_NAME}${ROUTE.guest}/${link}`)
      .then(() => {
        alert('링크가 복사되었습니다.');
      });
  };

  return (
    <Button size='sm' color='primary' isIconOnly onClick={handleClick}>
      <Link size={20} />
    </Button>
  );
};

export default ButtonLinkCopy;
