'use client';

import { Card } from '@heroui/card';

import { wrapper } from './styles';
import { useServicePopup } from '../store/popup';

interface Props {
  children: ReactNode;
  key: string;
}

const PopupItem = ({ children, key }: Props) => {
  const openKey = useServicePopup((state) => state.key);

  if (openKey === key) {
    return (
      <Card shadow='sm' className={wrapper({ popup: true })}>
        {children}
      </Card>
    );
  }

  return null;
};

export default PopupItem;
