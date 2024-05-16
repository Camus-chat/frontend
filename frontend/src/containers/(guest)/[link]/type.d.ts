interface ChatRoomInfo {
  userProfileImg: File;
  userNickname: string;
  channelInfo: string;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface GuestProfile extends Tokens {
  profileImgColor: string;
  nickname: string;
}
