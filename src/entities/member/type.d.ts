interface Member {
  uuid: string;
  username: string;
  nickname: string;
  profileLink: null | string;
  role: 'b2c' | 'b2b';
}
