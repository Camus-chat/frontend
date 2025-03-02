import { INFO_BOX_SIZE } from '@/components/InfoTextBox/constants';

interface Props {
  size: 'large' | 'medium' | 'small';
  title: string;
  content: string;
}

const InfoTextBox = ({ size, title, content }: Props) => {
  const { title: titleClasses, content: contentClasses } = INFO_BOX_SIZE[size];

  return (
    <div className='pb-3'>
      <div className={titleClasses}>{title}</div>
      <div className={contentClasses}>{content}</div>
    </div>
  );
};

export default InfoTextBox;
