type Account = {
  username: Member['username'];
  password: string;
};

type SignUpData = Account & {
  nickname: Member['nickname'];
  isEnterprise: boolean;
};

type UserConsent = {
  agreed: boolean;
};

type SignUpFormData = SignUpData & UserConsent;
