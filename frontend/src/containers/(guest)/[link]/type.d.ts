interface ChatRoomInfo {
  userProfileImg: File;
  userNickname: string;
  channelInfo: string;
}

interface EnterRoom {
  accessToken: string;
  refreshToken: string;
  roomId: string;
}

interface GuestProfile {
  profileImgColor: string;
  nickname: string;
}
