'use client';

import { useRouter } from 'next/navigation';

import styles from '@/containers/(account)/signup/index.module.scss';
import { useAccountStore } from '@/states/account';

import Button from '@/components/Button';

const CompleteSignup = () => {
  const { isEnterprise, id, password } = useAccountStore((state) => ({
    isEnterprise: state.isEnterprise,
    id: state.id,
    password: state.password,
  }));
  const router = useRouter();

  const handleClick = async () => {
    const response = await requestLogin({ id, password });

    if (response) {
      router.push(isEnterprise ? 'biz/' : '/');
    }
  };

  return (
    <div className={styles.completeWrapper}>
      <Button size='large' color='blue'>
        확인
      </Button>
    </div>
  );
};

export default CompleteSignup;
