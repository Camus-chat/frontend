import styles from '@/containers/biz/docs/index.module.scss';

interface Props {
  menu: { key: string; name: string }[];
  onClick: (key: string) => void;
}

const MenuBar = ({ menu, onClick }: Props) => {
  return (
    <div className={styles.menuBar}>
      {menu.map((item) => (
        <button
          key={item.key}
          className={styles.navItem}
          type='button'
          onClick={() => onClick(item.key)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default MenuBar;
