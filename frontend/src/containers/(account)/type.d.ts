interface Account {
  id: string;
  password: string;
}

interface EnterpriseAccount extends Account {
  companyName: string;
  companyEmail: string;
}

interface PersonalAccount extends Account {
  nickname: string;
  profileImg: File;
}
