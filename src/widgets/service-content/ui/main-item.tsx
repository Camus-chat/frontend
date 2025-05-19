'use client';

import { Card, CardBody, CardHeader } from '@heroui/react';

import { itemWrapperStyle } from './styles';

interface Props {
  children: ReactNode;
  title: string;
}

const MainItem = ({ children, title }: Props) => {
  return (
    <Card className={itemWrapperStyle()} shadow='sm'>
      <CardHeader>
        <h2 className='text-3xl font-semibold'>{title}</h2>
      </CardHeader>
      <CardBody className='scrollbar-hide'>{children}</CardBody>
    </Card>
  );
};

export default MainItem;
