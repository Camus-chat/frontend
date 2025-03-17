interface Props {
  list: Channel[] | null;
}

const Channels = ({ list }: Props) => {
  if (list === null) {
    return null;
  }

  // TODO: render channel list
  return null;
};

export default Channels;
