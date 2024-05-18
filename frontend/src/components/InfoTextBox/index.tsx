import styles from './index.module.scss';

interface Props {
  size: string;
  title: string;
  content: string;
}

const InfoTextBox = ({ size, title, content }: Props) => {
  return (
    <div className={styles[size]}>
      <div className={styles.title}>{title}</div>
      <pre className={styles.content}>{content}</pre>
    </div>
  );
};

export default InfoTextBox;
