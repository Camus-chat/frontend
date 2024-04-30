import styles from './index.module.scss';
import Button from '@/components/Button';
import Input from '@/components/Form/Input';
import FormWrapper from '@/components/Form/Wrapper';
import Member from '@/components/ProfileImage/Member';

interface Props {
  imgSrc: string;
}

const Profile = ({ imgSrc }: Props) => {
  return (
    <>
      <FormWrapper name='프로필 이미지'>
        <Member imgSrc={imgSrc} size='large' />
      </FormWrapper>
      <Input name='닉네임' type='text' placeholder='닉네임을 입력해 주세요' />
      <div className={styles.signupButton}>
        <Button size='large' color='gray' onClick={() => {}}>
          회원가입
        </Button>
      </div>
    </>
  );
};

export default Profile;
