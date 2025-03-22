import { Button } from '@heroui/button';
import { CardHeader } from '@heroui/card';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@heroui/drawer';
import { useDisclosure } from '@heroui/use-disclosure';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  title: string;
}

const ChatRoomHeader = ({ title }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <CardHeader className='item-center flex justify-between border-b-1 border-gray-100 pb-1 pt-2'>
      <div className='ml-2 text-xl font-semibold'>{`#${title}`}</div>
      <Button
        isIconOnly
        size='sm'
        variant='solid'
        className='bg-transparent'
        onPress={onOpen}
      >
        <MenuIcon />
      </Button>
      <Drawer
        size='xs'
        backdrop='opaque'
        isOpen={isOpen}
        placement='right'
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader>{`#${title}`}</DrawerHeader>
              <DrawerBody>
                <div className='text-md font-medium'>대화상대</div>
              </DrawerBody>
              <DrawerFooter>
                <Button color='danger' variant='light' onPress={() => {}}>
                  퇴장하기
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </CardHeader>
  );
};

export default ChatRoomHeader;
