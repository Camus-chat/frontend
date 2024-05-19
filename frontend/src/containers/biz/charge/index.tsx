import { DESCRIPTIONS, INFO_CARD } from '@/containers/biz/charge/constants';
import InfoCard from '@/containers/biz/charge/InfoCard';

import styles from './index.module.scss';
import Header from '@/components/Header';
import InfoTextBox from '@/components/InfoTextBox';

const Charge = () => {
  return (
    <>
      <Header biz />
      <div className={styles.container}>
        <div className={styles.descriptionWrapper}>
          <InfoTextBox
            size='large'
            title={DESCRIPTIONS.title}
            content={DESCRIPTIONS.content}
          />
          <div className={styles.additionals}>
            CAMUS는 자유로운 서비스 중단 및 재시작을 지원합니다.
          </div>
        </div>
        <div className={styles.cardWrapper}>
          {INFO_CARD.map((card) => (
            <InfoCard
              key={card.title}
              title={card.title}
              content={card.content}
              color={card.color}
              imgSrc={card.imgSrc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Charge;
