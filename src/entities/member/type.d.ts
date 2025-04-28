type MemberId = string;

interface Member {
  uuid: MemberId;
  username: string;
  nickname: string;
  profileLink: null | string;
  role: 'b2c' | 'b2b';
}
