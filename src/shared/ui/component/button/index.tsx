import { Button, type ButtonProps } from '@heroui/button';

interface Props extends Omit<ButtonProps, 'onPress' | 'onClick'> {
  onClick?: () => void;
}

const $Button = ({ onClick, radius = 'sm', ...props }: Props) => {
  return <Button radius={radius} onPress={onClick} {...props} />;
};

export default $Button;
