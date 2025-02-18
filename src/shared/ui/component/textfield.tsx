import { Input, type InputProps } from '@heroui/input';

const TextField: FC<InputProps> = (props) => {
  return <Input {...props} variant='underlined' />;
};

export default TextField;
