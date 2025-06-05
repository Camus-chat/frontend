import { useChattingStore } from './store';

export const useCurrentRoom = (roomProp?: ChattingRoom.Info) => {
  const storedRoomId = useChattingStore((state) => state.currentRoom);

  return roomProp ?? storedRoomId;
};
