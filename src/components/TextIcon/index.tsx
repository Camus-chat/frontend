import { Chip } from '@heroui/chip';

import { TEXT_ICON_NAME_MAP } from '@/components/TextIcon/constants';
import { TextIconName } from '@/components/TextIcon/type';

interface Props {
  name: TextIconName;
}

const TextIcon = ({ name }: Props) => {
  const { name: iconName, color } = TEXT_ICON_NAME_MAP[name];

  return (
    <Chip
      size='sm'
      variant='solid'
      color={color}
      classNames={{ content: 'text-white' }}
    >
      {iconName}
    </Chip>
  );
};

export default TextIcon;
