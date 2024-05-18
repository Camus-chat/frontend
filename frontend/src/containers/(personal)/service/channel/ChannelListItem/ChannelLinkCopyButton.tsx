'use client';

import LinkIcon from '@mui/icons-material/Link';

import Button from '@/components/Button';

interface Props {
  link: string;
}

const ChannelLinkCopyButton = ({ link }: Props) => {
  const handleClick = () => {
    navigator.clipboard.writeText(`https://camus.life/${link}`).then(() => {
      alert('링크가 복사되었습니다.');
    });
  };

  return (
    <Button size='small' color='blue' option='link' onClick={handleClick}>
      <LinkIcon />
    </Button>
  );
};

export default ChannelLinkCopyButton;
