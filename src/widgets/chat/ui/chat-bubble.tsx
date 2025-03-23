'use client';

import { ReactNode, useState } from 'react';

import {
  bubbleWrapperStyle,
  messageStyle,
  messageWrapperStyle,
} from '@/widgets/chat/ui/styles';

interface Props {
  children?: ReactNode;
  message: Message;
  receiverId: string;
  senderNickname: string;
  roomFilterLevel: number;
}

const ChatBubble = ({
  children,
  message,
  receiverId,
  senderNickname,
  roomFilterLevel,
}: Props) => {
  const isSentMessage = message.senderId === receiverId;
  const [isFiltered, setIsFiltered] = useState<boolean>(
    message.filteredLevel <= roomFilterLevel,
  );
  const sentType = isSentMessage ? 'sent' : 'received';
  const filterType = isFiltered ? 'filtered' : sentType;
  const bubbleMessage = isFiltered ? '필터링 되었습니다.' : message.content;

  const time = new Date(message.createdDate).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleNoFilter = () => {
    setIsFiltered(false);
  };

  return (
    <div className={bubbleWrapperStyle({ type: sentType })}>
      {!isSentMessage && children && (
        <div className='mr-1 pb-5'>{children}</div>
      )}
      <div className={messageWrapperStyle({ type: sentType })}>
        <div className={messageStyle({ type: filterType })}>
          {!isSentMessage && (
            <div className='mb-1 bg-transparent text-xs font-semibold'>
              {senderNickname}
            </div>
          )}
          <div className='bg-transparent text-base'>
            {bubbleMessage}
            {isFiltered && (
              <button
                className='ml-1 text-end text-xs text-[#858899]'
                type='button'
                onClick={handleNoFilter}
              >
                해제하기
              </button>
            )}
          </div>
        </div>
        <div className='p-1 text-xs text-[#858899]'>{time}</div>
      </div>
    </div>
  );
};

export default ChatBubble;
