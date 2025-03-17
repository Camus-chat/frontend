'use client';

import { Card } from '@heroui/card';

import { itemWrapperStyle } from './styles';
import { useServicePopup } from '../store/popup';

interface Props {
  children: ReactNode;
  id: string;
}

const PopupItem = ({ children, id }: Props) => {
  const openKey = useServicePopup((state) => state.key);

  if (openKey === id) {
    return (
      <Card shadow='sm' className={itemWrapperStyle({ popup: true })}>
        {children}
      </Card>
    );
  }

  return null;
};

export default PopupItem;
