import classNames from 'classnames';

import styles from './index.module.scss';

interface Props {
  content: string;
  color: string;
  isEssential?: boolean;
}

const CheckBox = ({ content, color, isEssential }: Props) => {
  return (
    <div className={classNames(styles.checkBox, styles[color])}>
      <label>
        <input type='checkbox' />
        {isEssential && <span>[필수]</span>}
        {content}
      </label>
    </div>
  );
};

export default CheckBox;
