interface Props {
  message: Message;
  targetNickname: string;
}

const MessageNotice = ({ message, targetNickname }: Props) => {
  return (
    <div className='mx-0 my-2 flex justify-center text-sm text-[#858899]'>{`${targetNickname}${message.content}`}</div>
  );
};

export default MessageNotice;
