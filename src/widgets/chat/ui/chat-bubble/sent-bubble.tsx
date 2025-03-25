interface Props {
  message: Message;
}

const SentBubble = ({ message }: Props) => {
  const time = new Date(message.createdDate).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className='mt-2 flex w-full justify-end'>
      <div className='flex flex-col items-end'>
        <div className='rounded-3xl bg-[#DDECF9] px-4 py-3'>
          <div className='bg-transparent text-base'>{message.content}</div>
        </div>
        <div className='p-1 text-xs text-[#858899]'>{time}</div>
      </div>
    </div>
  );
};

export default SentBubble;
