import { TEXT_ICON_NAME_MAP } from './constants';

import styles from './index.module.scss';
import type { TextIconName } from '@/components/TextIcon/type';

interface Props {
  name: TextIconName;
}

const TextIcon = ({ name }: Props) => {
  return <span className={styles[name]}>{TEXT_ICON_NAME_MAP[name]}</span>;
};

export default TextIcon;
