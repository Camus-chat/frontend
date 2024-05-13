import styles from '@/containers/biz/docs/index.module.scss';

interface Props {
  menu: { key: string; name: string }[];
  onClick: (key: string) => void;
}

const SideBar = ({ menu, onClick }: Props) => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.title}> 서비스</div>
      <div className={styles.navMenu}>
        {menu.map((item) => (
          <div key={item.key} className={styles.navItem}>
            <button type='button' onClick={() => onClick(item.key)}>
              {item.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
