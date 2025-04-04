import { callAPI } from '@/shared/api';

export const requestChattingMemberMap = async (
  chattingRooms: ChattingRoom.RawData[],
) => {
  const memberIdSet = new Set<string>(
    chattingRooms.flatMap((room) => room.userList),
  );

  const memberEntries = await Promise.all(
    Array.from(memberIdSet).map((memberId) =>
      callAPI.serverSide
        .post<Member>('/member/info', memberId)
        .then((res) => {
          return [memberId, res.data];
        })
        .catch((err) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('member info error:', err.response?.data);
          }
          throw new Error('채팅 멤버 정보를 불러오는데 실패했습니다.');
        }),
    ),
  );

  return Object.fromEntries(memberEntries);
};
