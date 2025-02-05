import { Input, type InputProps } from '@heroui/input';

import { input as styles } from './styles';

const TextField: FC<InputProps> = (props) => {
  return <Input {...props} {...styles} />;
};

export default TextField;
