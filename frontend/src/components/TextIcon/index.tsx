import { CONTENT } from './constants';

import styles from './index.module.scss';
import { textIconType } from '@/components/TextIcon/type';

interface Props {
  name: textIconType;
}

const TextIcon = ({ name }: Props) => {
  return <span className={styles[name]}>{CONTENT[name]}</span>;
};

export default TextIcon;
