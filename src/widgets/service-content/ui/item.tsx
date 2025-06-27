import { Card } from '@heroui/react';

import { itemWrapperStyle } from './styles';

const Item: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <Card shadow='sm' className={itemWrapperStyle()}>
      {children}
    </Card>
  );
};

export default Item;
