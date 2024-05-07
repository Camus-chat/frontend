interface LogIn {
  id: string;
  password: string;
}

interface SignUp extends LogIn {
  passwordConfirm: string;
}

interface EnterpriseAccount extends SignUp {
  companyName: string;
  companyEmail: string;
}

interface PersonalAccount extends SignUp {
  nickname: string;
  profileImage: string;
}
