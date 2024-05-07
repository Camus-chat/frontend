import styles from '@/containers/docs/index.module.scss';
import SideBar from '@/containers/docs/SideBar';

import First from './First';
import Header from '@/components/Header';

const Docs = () => {
  return (
    <>
      <Header biz />
      <div className={styles.container}>
        <SideBar />
        <div className={styles.contentWrapper}>
          <First />
        </div>
      </div>
    </>
  );
};

export default Docs;
