import Dropdown from '@/components/Form/DropDown';
import TextArea from '@/components/Form/TextArea';
import { MEMBER_OPTION, REQUEST_OPTION } from '@/containers/support/constants';
import { Button, Input } from '@/shared/ui';

import styles from './index.module.scss';

const Assist = () => {
  return (
    <>
      <p className={styles.title}> 1:1 문의하기</p>
      <Dropdown
        name='회원 유형'
        options={MEMBER_OPTION}
        placeholder='회원 유형을 선택해 주세요'
      />
      <Input label='고객명' type='text' placeholder='고객명을 입력해 주세요' />
      <Input
        label='이메일 주소'
        type='text'
        placeholder='이메일 주소를 입력해 주세요'
      />
      <Dropdown name='문의 분류' options={REQUEST_OPTION} placeholder='-' />
      <Input label='문의 제목' type='text' placeholder='제목을 입력해 주세요' />
      <TextArea name='문의 내용' />
      <Button size='lg' color='primary'>
        문의하기
      </Button>
    </>
  );
};

export default Assist;
