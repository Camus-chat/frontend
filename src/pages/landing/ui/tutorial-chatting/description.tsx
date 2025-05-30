import { tv } from 'tailwind-variants';

const createStyle = tv({
  slots: {
    wrapper: [
      'flex max-w-[666px] flex-col gap-4 max-lg:mb-16 lg:max-xl:grow',
      'items-center xl:items-start',
      'text-center xl:text-left',
    ],
    title: ['font-bold', 'text-5xl md:text-6xl lg:text-7xl xl:text-6xl'],
    description: 'text-lg sm:text-xl',
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
