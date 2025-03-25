import { Avatar } from '@heroui/avatar';

interface Props {
  message: Message;
  senderNickname: string;
  senderProfileImg: string;
}

const ReceivedBubble = ({
  message,
  senderNickname,
  senderProfileImg,
}: Props) => {
  const time = new Date(message.createdDate).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className='mt-2 flex w-full items-end'>
      <div className='mb-1 mr-1 pb-5'>
        <Avatar size='md' src={senderProfileImg} />
      </div>
      <div className='flex flex-col items-start'>
        <div className='rounded-3xl bg-[#F6F7F8] px-4 py-3'>
          <div className='mb-1 bg-transparent text-xs font-semibold'>
            {senderNickname}
          </div>
          <div className='bg-transparent text-base'>{message.content}</div>
        </div>
        <div className='p-1 text-xs text-[#858899]'>{time}</div>
      </div>
    </div>
  );
};

export default ReceivedBubble;
