import { tv } from 'tailwind-variants';

import Item from './item';
import MainItem from './main-item';
import PopupItem from './popup-item';

interface Props {
  children: ReactNode;
}

const contentsWrapperStyle = tv({
  base: [
    'relative flex h-full items-start justify-center gap-5',
    'md:items-center',
    // padding
    'pb-service-menu',
    'md:px-5 md:py-12',
  ],
});

const ServiceContent = ({ children }: Props) => {
  return <div className={contentsWrapperStyle()}>{children}</div>;
};

ServiceContent.MainItem = MainItem;
ServiceContent.PopupItem = PopupItem;
ServiceContent.ContentItem = Item;

export default ServiceContent;
