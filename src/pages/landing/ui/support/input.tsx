import { Input } from '@heroui/react';

import { useAssistDataStore } from '@/pages/landing/store/assist-data';

type Selector = Parameters<typeof useAssistDataStore>[0];
type State = Parameters<Selector>[0];

interface Props {
  label: string;
  placeholder: string;
  valueSelector: (state: State) => string;
  setValueSelector: (state: State) => (value: string) => void;
  errorSelector?: (state: State) => string;
}

const SupportInput = ({
  valueSelector,
  setValueSelector,
  errorSelector,
  ...props
}: Props) => {
  const value = useAssistDataStore(valueSelector);
  const setValue = useAssistDataStore(setValueSelector);
  const error = useAssistDataStore(errorSelector ?? (() => undefined));

  return (
    <Input
      classNames={{ inputWrapper: 'border-1', label: 'z-0' }}
      {...props}
      variant='bordered'
      size='lg'
      labelPlacement='outside'
      value={value}
      isRequired
      onValueChange={setValue}
      errorMessage={error}
      isInvalid={Boolean(error)}
    />
  );
};

export default SupportInput;
