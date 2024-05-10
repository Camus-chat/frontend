import styles from '@/containers/tutorial/channel/index.module.scss';

import Button from '@/components/Button';

const CreateButton = () => {
  return (
    <div className={styles.buttonWrapper}>
      <Button size='large' color='lightgray'>
        취소하기
      </Button>
      <Button size='large' color='blue'>
        생성하기
      </Button>
    </div>
  );
};

export default CreateButton;
