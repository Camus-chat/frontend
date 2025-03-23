'use client';

import { DOMAIN_NAME, ROUTE } from '@/shared/config';
import { Button, LinkIcon } from '@/shared/ui';

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
      <LinkIcon size={20} />
    </Button>
  );
};

export default ButtonLinkCopy;
