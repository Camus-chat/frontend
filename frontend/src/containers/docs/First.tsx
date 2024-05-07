import styles from '@/containers/docs/index.module.scss';

import InfoTextBox from '@/components/InfoTextBox';

const First = () => {
  return (
    <div className={styles.content}>
      <div className={styles.titleWrapper}>AI 감정 분석</div>
      <div className={styles.introduce}>
        <InfoTextBox size='small' title='이해하기' content='이해해라' />
      </div>
      <div className={styles.serviceInfo}>
        <InfoTextBox
          size='small'
          title='기능 소개'
          content='CAMUS 서비스 소개'
        />
        <div className={styles.document}>기능에 대한 소개를 해주세요.</div>
      </div>
    </div>
  );
};

export default First;
