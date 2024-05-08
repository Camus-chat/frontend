import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import classNames from 'classnames';

import styles from '@/components/ProfileImage/index.module.scss';
import {
  profileColorType,
  profileImageType,
} from '@/components/ProfileImage/type';

interface Props {
  group?: boolean;
  size: profileImageType;
  color: profileColorType;
}

const Random = ({ group, size, color }: Props) => {
  return (
    <div className={classNames(styles.profile, styles[size], styles[color])}>
      {group ? <GroupsIcon /> : <PersonIcon />}
    </div>
  );
};

export default Random;
