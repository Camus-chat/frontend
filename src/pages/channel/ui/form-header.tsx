import { CardHeader } from '@heroui/card';

const FormHeader: FC<{
  title: string;
  children: ReactNode;
}> = ({ title, children }) => {
  return (
    <CardHeader className='flex-col items-start'>
      <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='text-sm'>{children}</p>
    </CardHeader>
  );
};

export default FormHeader;
