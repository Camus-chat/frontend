import SelectButton from '@/containers/(account)/login/SelectButton';
import {
  CHANNEL_CREATE,
  CHANNEL_DESCRIPTION,
} from '@/containers/tutorial/constants';
import styles from '@/containers/tutorial/index.module.scss';

import InfoTextBox from '@/components/InfoTextBox';

const Channel = () => {
  /* TODO
      - 애니메이션 : keyframe 사용해서 애니메이션 추가하기
      - 페이드 인 에니메이션 추가됨에 따라 우측의 description 문구 변경 (constants로 관리하기)
      - selectButton 공컴으로 빼기

    */
  return (
    <div className={styles.tutorialWrapper}>
      <div className={styles.blueBox}>
        <div className={styles.contentBox}>
          <InfoTextBox
            size='small'
            title={CHANNEL_CREATE.title}
            content={CHANNEL_CREATE.content}
          />
          <SelectButton />
        </div>
      </div>
      <div className={styles.textBox}>
        <InfoTextBox
          size='large'
          title={CHANNEL_DESCRIPTION[0].title}
          content={CHANNEL_DESCRIPTION[0].content}
        />
      </div>
    </div>
  );
};

export default Channel;
