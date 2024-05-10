import { DESCRIPTIONS, INFO_CARD } from '@/containers/charge/constants';
import InfoCard from '@/containers/charge/InfoCard';

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
            size='medium'
            title={DESCRIPTIONS.title}
            content={DESCRIPTIONS.content}
          />
        </div>
        <div className={styles.cardWrapper}>
          {INFO_CARD.map((card, index) => (
            <InfoCard
              key={card.title}
              title={card.title}
              content={card.content}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Charge;
