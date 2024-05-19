interface Navigation {
  key: string;
  name: string;
  path: string;
}

interface MemberInfo extends ResponseError {
  nickname: string;
  profileLink: string;
}
