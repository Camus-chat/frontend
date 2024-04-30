import { MEMBER_OPTION, ROUTE_OPTION } from '@/containers/support/constants';

import styles from './index.module.scss';
import Button from '@/components/Button';
import Dropdown from '@/components/Form/DropDown';
import Input from '@/components/Form/Input';
import TextArea from '@/components/Form/TextArea';

const Request = () => {
  return (
    <>
      <p className={styles.title}> 상담 및 도입문의</p>
      <Dropdown
        name='회원 유형'
        options={MEMBER_OPTION}
        placeholder='회원 유형을 선택해 주세요'
      />
      <Input name='회사명' type='text' placeholder='회사명을 입력해 주세요' />
      <Input name='이름' type='text' placeholder='이름을 입력해 주세요' />
      <Input
        name='이메일 주소'
        type='text'
        placeholder='이메일 주소를 입력해 주세요'
      />
      <Input name='직책' type='text' placeholder='직책을 입력해 주세요' />
      <Dropdown name='유입 경로' options={ROUTE_OPTION} placeholder='-' />
      <Input name='문의 제목' type='text' placeholder='제목을 입력해 주세요' />
      <TextArea name='문의 내용' />
      <Button size='large' color='blue'>
        문의하기
      </Button>
    </>
  );
};

export default Request;
