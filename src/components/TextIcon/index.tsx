import { Chip } from '@heroui/chip';

import { ICON_TYPE, TEXT_ICON_NAME_MAP } from '@/components/TextIcon/constants';
import { TextIconName } from '@/components/TextIcon/type';

interface Props {
  name: TextIconName;
}

const TextIcon = ({ name }: Props) => {
  const { type, name: iconName, color, variant } = TEXT_ICON_NAME_MAP[name];

  return (
    <div className='m-1'>
      <Chip
        variant={variant}
        color={color}
        classNames={{ content: ICON_TYPE[type].style }}
      >
        {iconName}
      </Chip>
    </div>
  );
};

export default TextIcon;
