import { CheckCircle } from 'lucide-react';

const BANNER_OPTION = [
  '활용 사례 상담',
  '주요 기능 살펴보기',
  '맞춤 견적 받기',
];

const Banner = () => {
  return (
    <article className='flex h-full flex-col items-center justify-start px-16'>
      <div>
        <h2 className='text-5xl font-semibold leading-tight lg:text-6xl'>
          지금 영업팀에
          <br className='hidden lg:inline' />
          문의하세요.
        </h2>
        <p className='mt-4 text-xl font-light tracking-tight text-gray-700 lg:pr-5 lg:text-2xl'>
          CAMUS가 앱 내외에서 제공하는 더욱 혁신적인 커뮤니케이션을
          확인해보세요.
        </p>
        <div className='flex items-center justify-center lg:justify-start'>
          <ul className='mt-4 text-medium font-semibold lg:text-xl'>
            {BANNER_OPTION.map((item) => (
              <li key={item} className='mb-1 flex items-center gap-2'>
                <CheckCircle size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Banner;
