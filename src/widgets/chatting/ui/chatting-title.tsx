interface Props {
  title: string;
}

const ChattingTitle = ({ title }: Props) => {
  return <div className='mx-0.5 text-xl font-medium'>{`# ${title}`}</div>;
};

export default ChattingTitle;
