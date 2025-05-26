'use client';

import { Input } from '@heroui/react';
import { Send } from 'lucide-react';
import { useCallback, useMemo, useRef, useState } from 'react';

import { Button } from '@/shared/ui';

const sendIcon = <Send size={18} className='mr-0.5 mt-0.5' />;

interface Props {
  onSendMessage: (value: string) => void;
  isDisabled?: boolean;
}

const InputMessage = ({ onSendMessage, isDisabled }: Props) => {
  const [value, setValue] = useState('');
  const compositionRef = useRef(false);
  const trimmed = value.trim();
  const hasValue = Boolean(trimmed);

  const handleSendMessage = () => {
    if (!hasValue) {
      return;
    }
    onSendMessage(trimmed);
    setValue('');
  };

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

  const onCompositionStart = useCallback(() => {
    compositionRef.current = true;
  }, []);

  const onCompositionEnd = useCallback(() => {
    compositionRef.current = false;
  }, []);

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
        if (compositionRef.current) {
          return;
        }
        if (e.key === 'Enter') {
          handleSendMessage();
        }
      }}
      endContent={sendButton}
      onCompositionEnd={onCompositionEnd}
      onCompositionStart={onCompositionStart}
    />
  );
};

export default InputMessage;
