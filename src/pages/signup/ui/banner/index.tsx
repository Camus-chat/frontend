import { Check } from 'lucide-react';

import Animation from './animation';

const DETAILS = [
  'Access to all premium features',
  'Free for unlimited time',
  'No credit card required',
];

const Banner = () => {
  return (
    <article className='flex h-full w-[480px] flex-col justify-between bg-gray-100 px-10 py-32 max-lg:hidden'>
      <div>
        <h2 className='text-4xl font-bold'>
          Take advantage of our free Starter plan
        </h2>
        <p className='mt-10 pr-5 font-light tracking-tight text-gray-700'>
          Subscribe to our Starter plan to get your business started with 100
          MAUs and leverage CAMUS’s other premium features for free.
        </p>
        <ul className='mt-4 font-medium'>
          {DETAILS.map((detail) => (
            <li key={detail} className='mb-1 flex items-center gap-2'>
              <Check size={16} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <Animation />
    </article>
  );
};

export default Banner;
