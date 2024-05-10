import styles from './index.module.scss';
import Input from '@/components/Form/Input';

const ChannelInfo = () => {
  return (
    <div className={styles.channelInfoWrapper}>
      <Input name='채널명' type='text' placeholder='채널명을 입력해주세요.' />
      <Input
        name='소개글'
        type='text'
        placeholder='한 줄 소개를 작성해주세요.'
      />
    </div>
  );
};

export default ChannelInfo;
