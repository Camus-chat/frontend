interface Auth {
  username: string;
  password: string;
  nickname: string;
  isEnterprise: boolean;
}

type SignUp = Auth;

type LogIn = Pick<Auth, 'username' | 'password'>;
