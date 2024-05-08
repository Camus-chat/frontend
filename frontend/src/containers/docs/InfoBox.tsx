import styles from '@/containers/docs/index.module.scss';

interface Props {
  description: { title: string; content: string };
}

const InfoBox = ({ description }: Props) => {
  return (
    <div className={styles.infoBox}>
      <div className={styles.title}>{description.title}</div>
      <div className={styles.content}>{description.content}</div>
    </div>
  );
};

export default InfoBox;
