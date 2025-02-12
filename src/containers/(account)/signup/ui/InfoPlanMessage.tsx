import dynamic from 'next/dynamic';

import CheckIcon from './check-icon';
import Manage from './manage.json';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const InfoPlanMessage = () => {
  return (
    <div className='flex flex-col gap-3 bg-gray-100 px-10 py-32'>
      <h1 className='text-4xl font-bold'>
        Take advantage of our free Developer plan
      </h1>
      <p className='text-base/2 mt-10 pr-5 font-light tracking-tight text-gray-700'>
        Subscribe to our Developer plan to get your business started with 100
        MAUs and leverage CAMUS’s other premium features for free.
      </p>
      <ul className='mt-4 text-base font-medium'>
        <li className='flex items-center'>
          <CheckIcon />
          <span className='pl-1'>Access to all premium features</span>
        </li>
        <li className='flex items-center'>
          <CheckIcon />
          <span className='pl-1'>Free for unlimited time</span>
        </li>
        <li className='flex items-center'>
          <CheckIcon />
          <span className='pl-1'>
            No credit card required <br />
          </span>
        </li>
      </ul>
      <div className='mt-4'>
        <Lottie
          loop
          play
          animationData={Manage}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default InfoPlanMessage;
