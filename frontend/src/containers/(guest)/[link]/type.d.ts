interface ChatRoomInfo {
  userProfileImg: File;
  userNickname: string;
  channelInfo: string;
}

interface Token {
  accessToken: string;
  refreshToken: string;
}

interface GuestProfile {
  profileImgColor: string;
  nickname: string;
}
