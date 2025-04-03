'use client';

import { Chip } from '@heroui/chip';

import { useChattingRoomStore } from '../../store/chatting-room';

const Preview: FC<{
  chattingRoomId: ChattingRoom['roomId'];
}> = ({ chattingRoomId }) => {
  const chattingRoom = useChattingRoomStore(
    (state) => state.chattingRoomMap[chattingRoomId],
  );

  return (
    <div className='relative w-full'>
      <div className='text-start text-default-500'>
        {chattingRoom.lastMessage.content}
      </div>
      <span className='absolute bottom-0 right-0 flex flex-col items-end gap-0.5'>
        <Chip color='primary' size='sm'>
          {chattingRoom.unreadCount}
        </Chip>
        <div className='text-default-500'>{chattingRoom.lastMessage.time}</div>
      </span>
    </div>
  );
};

export default Preview;
