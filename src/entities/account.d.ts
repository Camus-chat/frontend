interface Account {
  username: string;
  password: string;
}

type UserConsent = {
  agreed: boolean;
};

interface SignUpData extends Account {
  nickname: Member['nickname'];
  isEnterprise: boolean;
}

type SignUpFormData = SignUpData & UserConsent;
