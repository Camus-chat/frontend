'use client';

import LinkIcon from '@mui/icons-material/Link';

import { Button } from '@/shared/ui';

interface Props {
  link: string;
}

const ChannelLinkCopyButton = ({ link }: Props) => {
  const handleClick = () => {
    navigator.clipboard
      .writeText(`https://camus.life/guest/${link}`)
      .then(() => {
        alert('링크가 복사되었습니다.');
      });
  };

  return (
    <Button size='sm' color='primary' isIconOnly onClick={handleClick}>
      <LinkIcon />
    </Button>
  );
};

export default ChannelLinkCopyButton;
