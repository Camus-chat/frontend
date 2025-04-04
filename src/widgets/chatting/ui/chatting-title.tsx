interface Props {
  title: string;
}

export const ChattingTitle = ({ title }: Props) => {
  return <div className='mx-0.5 text-xl font-medium'>{`# ${title}`}</div>;
};
