import classNames from 'classnames';

import styles from '@/containers/(account)/signup/index.module.scss';

import Button from '@/components/Button';

interface Props {
  prev: string;
  clickPrev?: () => void;
  clickNext: () => void;
  nextColor: string;
}

const ButtonBox = ({ prev, clickPrev, clickNext, nextColor }: Props) => {
  return (
    <div className={styles.buttonWrapper}>
      <div className={classNames(styles.prevButton, styles[prev])}>
        <Button size='large' color='login' onClick={clickPrev}>
          이전
        </Button>
      </div>
      <div className={styles.nextButton}>
        <Button size='large' color={nextColor} onClick={clickNext}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default ButtonBox;
