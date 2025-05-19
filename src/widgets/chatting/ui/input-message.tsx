'use client';

import { Input } from '@heroui/react';
import { Send } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';

import { Button } from '@/shared/ui';

const sendIcon = <Send size={18} className='mr-0.5 mt-0.5' />;

interface Props {
  onSendMessage: (value: string) => void;
  isDisabled?: boolean;
}

const InputMessage = ({ onSendMessage, isDisabled }: Props) => {
  const [value, setValue] = useState('');
  const hasValue = !!value.trim();

  const handleSendMessage = useCallback(() => {
    setValue((prev) => {
      const trimmed = prev.trim();
      if (!trimmed) {
        return prev;
      }
      onSendMessage(trimmed);
      return '';
    });
  }, []);

  const sendButton = useMemo(() => {
    return (
      <Button
        size='sm'
        color='primary'
        radius='full'
        isIconOnly
        onClick={handleSendMessage}
        isDisabled={!hasValue}
      >
        {sendIcon}
      </Button>
    );
  }, [hasValue]);

  return (
    <Input
      isDisabled={isDisabled}
      placeholder='메시지 입력'
      classNames={{
        inputWrapper: 'pr-1',
      }}
      radius='full'
      value={value}
      onValueChange={setValue}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSendMessage();
        }
      }}
      endContent={sendButton}
    />
  );
};

export default InputMessage;
