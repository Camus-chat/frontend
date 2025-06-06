import { tv } from 'tailwind-variants';

import { description } from '../styles';

const createStyle = tv({
  extend: description,
  slots: {
    wrapper: [
      'max-w-[666px] lg:max-xl:grow',
      'items-center xl:items-start',
      'text-center xl:text-left',
    ],
    title: 'xl:text-6xl',
  },
});

const TutorialChattingDescription = () => {
  const styles = createStyle();

  return (
    <div className={styles.wrapper()}>
      <h1 className={styles.title()}>
        {'문맥까지 이해하는 '}
        <br className='sm:max-lg:hidden xl:hidden' />
        AI 필터링
      </h1>
      <p className={styles.description()}>
        {'실시간 감지와 정교한 필터링으로 악성 채팅을 차단하고, '}
        <br className='max-xs:hidden xl:hidden' />
        누구나 안심하고 대화할 수 있는 커뮤니케이션 공간을 만듭니다.
      </p>
    </div>
  );
};

export default TutorialChattingDescription;
