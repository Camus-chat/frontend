interface Account {
  username: string;
  password: string;
}

namespace Account {
  interface SignUp extends Account {
    nickname: string;
    isEnterprise: boolean;
  }
}
