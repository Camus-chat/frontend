import { ReactNode } from 'react';

import styles from './index.module.css';

interface Props {
  children: ReactNode;
}

const ChatList = ({ children }: Props) => {
  return <ul className={styles.chatList}>{children}</ul>;
};

export default ChatList;
