'use client';

import { Card, CardBody, CardHeader } from '@heroui/card';

import { itemWrapperStyle } from './styles';

interface Props {
  children: ReactNode;
  title: string;
}

const MainItem = ({ children, title }: Props) => {
  return (
    <Card className={itemWrapperStyle()} shadow='sm'>
      <CardHeader>
        <h2 className='text-2xl font-bold'>{title}</h2>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default MainItem;
