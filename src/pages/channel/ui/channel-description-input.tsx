import { useChannelFormStore } from '@/pages/channel/store/form';
import { inputStyleProps } from '@/pages/channel/ui/styles';
import { Input } from '@/shared/ui';

const ChannelDescriptionInput = () => {
  const description = useChannelFormStore((state) => state.content);
  const setDescription = useChannelFormStore((state) => state.setContent);

  return (
    <Input
      value={description}
      onValueChange={setDescription}
      type='text'
      label='소개글'
      placeholder='한 줄 소개를 작성해주세요'
      {...inputStyleProps}
    />
  );
};

export default ChannelDescriptionInput;
