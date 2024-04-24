import styles from './index.module.scss';
import Button from '@/components/Button';
import DropDown from '@/components/Form/DropDown';
import Input from '@/components/Form/Input';

export default function Example() {
  const exampleOption = [
    {
      value: 'ko',
      name: '한국',
    },
  ];

  return (
    <div className={styles.example}>
      <Button size='large' color='blue'>
        세진바보
      </Button>
      <br />
      <Input name='아이디' type='text' placeholder='아이디를 입력해주세요.' />
      <Input
        name='비밀번호'
        type='password'
        placeholder='비밀번호를 입력해주세요.'
        invalid
      />
      <DropDown name='국가' options={exampleOption} />
    </div>
  );
}
