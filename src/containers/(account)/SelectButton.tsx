'use client';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// import styles from '@/containers/(account)/login/index.module.scss';
import { useAccountStore } from '@/states/account';

import { ENTERPRISE, PERSONAL } from './login/constants';
import Button from '@/components/Button';

const SelectButton = () => {
  const { isEnterprise, setIsEnterprise } = useAccountStore((state) => ({
    isEnterprise: state.isEnterprise,
    setIsEnterprise: state.setIsEnterprise,
  }));

  const enterpriseColor = isEnterprise ? 'skyblue' : 'lightgray';
  const personalColor = isEnterprise ? 'lightgray' : 'skyblue';

  const handleClick = (clickedValue: boolean) => {
    setIsEnterprise(clickedValue);
  };

  return (
    <div className="py-2 w-full grid gap-2 grid-cols-2">
      <Button
        size='large'
        color={enterpriseColor}
        onClick={() => handleClick(ENTERPRISE)}
        option='outline'
      >
        <CheckCircleIcon className="w-4 mr-0.5"/>
        기업회원
      </Button>
      <Button
        size='large'
        color={personalColor}
        onClick={() => handleClick(PERSONAL)}
        option='outline'
      >
        <CheckCircleIcon className="w-4 mr-0.5"/>
        개인회원
      </Button>
    </div>
  );
};

export default SelectButton;
