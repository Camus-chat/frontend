import styles from './index.module.scss';
import Button from '@/components/Button';
import Dropdown from '@/components/Form/DropDown';
import Input from '@/components/Form/Input';
import TextArea from '@/components/Form/TextArea';

const Request = () => {
  const memberOption: DropDownItems[] = [
    { value: 'personal', name: '개인' },
    { value: 'enterprise', name: '기업' },
  ];

  const requestOption: DropDownItems[] = [
    { value: 'service', name: '서비스' },
    { value: 'bills', name: '요금' },
  ];

  return (
    <>
      <p className={styles.title}> 1:1 문의하기</p>
      <Dropdown name='회원 유형' options={memberOption} />
      <Input name='고객명' type='text' placeholder='고객명을 입력해주세요' />
      <Input
        name='이메일 주소'
        type='text'
        placeholder='이메일 주소를 입력해주세요'
      />
      <Dropdown name='문의 분류' options={requestOption} />
      <Input name='문의 제목' type='text' placeholder='제목을 입력해주세요' />
      <TextArea name='문의 내용' />
      <Button size='large' color='blue'>
        문의하기
      </Button>
    </>
  );
};

export default Request;
