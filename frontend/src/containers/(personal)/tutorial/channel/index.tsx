import ChannelInfo from '@/containers/(personal)/tutorial/channel/ChannelInfo';
import CreateButton from '@/containers/(personal)/tutorial/channel/CreateButton';
import styles from '@/containers/(personal)/tutorial/channel/index.module.scss';
import SelectChatType from '@/containers/(personal)/tutorial/channel/SelectChatType';
import {
  CHANNEL_CREATE,
  CHANNEL_DESCRIPTION,
  FILTER_OPTION,
} from '@/containers/(personal)/tutorial/constants';

import DropDown from '@/components/Form/DropDown';
import InfoTextBox from '@/components/InfoTextBox';

const Channel = () => {
  return (
    <div className={styles.tutorialWrapper}>
      <div className={styles.blueBox}>
        <div className={styles.createChannelBox}>
          <InfoTextBox
            size='small'
            title={CHANNEL_CREATE.title}
            content={CHANNEL_CREATE.content}
          />
          <div>
            <SelectChatType />
          </div>
          <div>
            <ChannelInfo />
          </div>
          <div>
            <DropDown
              name='필터링 강도'
              options={FILTER_OPTION}
              placeholder='필터링 강도를 선택해주세요.'
            />
            <CreateButton />
          </div>
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
