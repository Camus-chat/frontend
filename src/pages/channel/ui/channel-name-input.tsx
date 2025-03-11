import { useChannelFormStore } from '@/pages/channel/store/form';
import { inputStyleProps } from '@/pages/channel/ui/styles';
import { Input } from '@/shared/ui';

const ChannelNameInput = () => {
  const name = useChannelFormStore((state) => state.title);
  const setName = useChannelFormStore((state) => state.setTitle);

  return (
    <Input
      value={name}
      onValueChange={setName}
      label='채널명'
      type='text'
      placeholder='채널명을 입력해주세요'
      {...inputStyleProps}
    />
  );
};

export default ChannelNameInput;
