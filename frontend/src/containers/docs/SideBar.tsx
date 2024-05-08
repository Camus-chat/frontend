import styles from '@/containers/docs/index.module.scss';

interface Props {
  menu: { key: string; name: string }[];
  onClick: (key: string) => void;
}

const SideBar = ({ menu, onClick }: Props) => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.title}> AI 감정분석</div>
      <div className={styles.navMenu}>
        {menu.map((item) => (
          <div key={item.key} className={styles.navItem}>
            <button onClick={() => onClick(item.key)}>{item.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
