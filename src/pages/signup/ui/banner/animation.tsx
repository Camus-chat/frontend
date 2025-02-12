'use client';

import dynamic from 'next/dynamic';

import Manage from './manage.json';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const Animation = () => {
  return <Lottie loop play animationData={Manage} />;
};

export default Animation;
