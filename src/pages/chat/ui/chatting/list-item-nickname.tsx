import { Skeleton } from '@heroui/react';

import { useChattingRoomStore } from '../../store/chatting-room';

const Nickname: FC<{
  chattingRoom: ChattingRoom;
}> = ({ chattingRoom }) => {
  const chattingMemberMap = useChattingRoomStore(
    (state) => state.chattingMemberMap,
  );

  if (chattingRoom.channelType === 'group') {
    return null;
  }

  const { counterpart } = chattingRoom;
  if (!counterpart) {
    return <Skeleton className='h-4 w-20 rounded-lg' />;
  }

  return (
    <span className='font-semibold'>
      {chattingMemberMap[counterpart].nickname}
    </span>
  );
};

export default Nickname;
