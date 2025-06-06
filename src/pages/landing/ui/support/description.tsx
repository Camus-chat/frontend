import { description } from '../styles';
import { CheckCircle } from './check-circle';

const SupportDescription = () => {
  const styles = description();

  return (
    <div className={styles.wrapper({ class: 'max-lg:items-center' })}>
      <h1 className={styles.title({ class: 'max-xs:text-center' })}>
        {'지금 영업팀에 '}
        <br className='xs:max-lg:hidden' />
        문의하세요.
      </h1>
      <p
        className={styles.description({
          class: 'max-w-[540px] xs:max-lg:text-center',
        })}
      >
        {'CAMUS가 앱 내외에서 제공하는 더욱 혁신적인 '}
        <br className='max-xs:hidden lg:hidden' />
        고객 커뮤니케이션을 확인해보세요.
      </p>
      <ul className='flex flex-col gap-1'>
        {['활용 사례 상담', '주요 기능 살펴보기', '맞춤 견적 받기'].map(
          (item) => (
            <li key={item} className='flex items-center gap-2'>
              <CheckCircle size={20} className='text-indigo-600' />
              <span className='font-semibold lg:text-lg'>{item}</span>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default SupportDescription;
