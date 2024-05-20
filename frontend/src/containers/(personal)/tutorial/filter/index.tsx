'use client';

import ChatInputBox from '@/lib/componenets/ChatInputBox';
import ChatMessageBubble from '@/lib/componenets/ChatMessageBubble';
import React from 'react';

import {
  FILTER_DESCRIPTION,
  FILTER_MESSAGES,
  FILTER_OPTION,
} from '@/containers/(personal)/tutorial/constants';
import styles from '@/containers/(personal)/tutorial/index.module.scss';

import DropDown from '@/components/Form/DropDown';
import Random from '@/components/ProfileImage/Random';

const Filter = () => {
  // TODO: 클릭이벤트, API 연결해야됨
  const handleClick = () => {};

  return (
    <div className={styles.tutorialWrapper}>
      <div className={styles.textBox}>
        <div className={styles.title}>{FILTER_DESCRIPTION.title}</div>
        <pre className={styles.description}>{FILTER_DESCRIPTION.content}</pre>
        <div className={styles.dropdown}>
          <DropDown
            name='필터링 강도'
            options={FILTER_OPTION}
            placeholder='필터링 강도를 선택해주세요.'
            onSelect={() => {}}
          />
        </div>
      </div>
      <div className={styles.filterBlueBox}>
        <div className={styles.contentBox}>
          <div className={styles.chatBox}>
            {/* TODO: chatting 컴포넌트 api 연결해서 테스트 할 수 있게 해야함. */}
            {FILTER_MESSAGES.map((item) => (
              <ChatMessageBubble
                message={item}
                senderNickname='CAMUS'
                receiverId='rid'
                key={item.content}
              >
                <Random size='small' color='yellow' />
              </ChatMessageBubble>
            ))}
          </div>
          <div>
            <ChatInputBox onClick={handleClick} roomId='' token='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
