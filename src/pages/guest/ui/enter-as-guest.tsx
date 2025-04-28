'use client';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@heroui/modal';

import { Button } from '@/shared/ui';

import EnterAsGuestFooter from './enter-as-guest-footer';

interface Props {
  link: string;
}

const EnterAsGuest = ({ link }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button variant='light' className='w-full' onClick={onOpen}>
        게스트로 참여하기
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>주의</ModalHeader>
              <ModalBody>
                <p>
                  게스트로 참여할 경우 채팅 내역이 보관되지 않습니다. <br />
                  정말 게스트로 참여하시겠습니까?
                </p>
              </ModalBody>
              <EnterAsGuestFooter onClose={onClose} link={link} />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EnterAsGuest;
