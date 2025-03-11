import MainItem from './main-item';
import PopupItem from './popup-item';

interface Props {
  children: ReactNode;
}

const ServiceContent = ({ children }: Props) => {
  return (
    <div className='pb-service-menu relative flex h-full items-start justify-center gap-5 md:items-center md:px-5'>
      {children}
    </div>
  );
};

ServiceContent.MainItem = MainItem;
ServiceContent.PopupItem = PopupItem;

export default ServiceContent;
