'use client';

import ChatBubble from '@/lib/componenets/ChatBubble';
import ChatInputBox from '@/lib/componenets/ChatInputBox';

import {
  FILTER_DESCRIPTION,
  FILTER_OPTION,
} from '@/containers/(personal)/tutorial/constants';
import styles from '@/containers/(personal)/tutorial/index.module.scss';

import DropDown from '@/components/Form/DropDown';
import InfoTextBox from '@/components/InfoTextBox';
import Random from '@/components/ProfileImage/Random';

const Filter = () => {
  return (
    <div className={styles.tutorialWrapper}>
      <div className={styles.textBox}>
        <InfoTextBox
          size='large'
          title={FILTER_DESCRIPTION.title}
          content={FILTER_DESCRIPTION.content}
        />
        <DropDown
          name='필터링 강도'
          options={FILTER_OPTION}
          placeholder='필터링 강도를 선택해주세요.'
          onSelect={() => {}}
        />
      </div>
      <div className={styles.filterBlueBox}>
        <div className={styles.contentBox}>
          <div className={styles.chatBox}>
            TODO: chatting 컴포넌트 api 연결해서 테스트 할 수 있게 해야함.
            {/* <ChatBubble message='안녕하세요 사장님' isSent={false}> */}
            {/*  <Random size='small' color='rose' /> */}
            {/* </ChatBubble> */}
            {/* <ChatBubble message='예, 안녕하세요' /> */}
            {/* <ChatBubble message='필터링 될 메시지' isSent={false}> */}
            {/*  <Random size='small' color='rose' /> */}
            {/* </ChatBubble> */}
          </div>
          <div className={styles.chatInputBox}>
            <ChatInputBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
