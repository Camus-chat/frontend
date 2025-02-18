import Manage from '@/pages/signup/ui/banner/manage.json';

import Channel from '../../../public/animations/channel.json';
import Chatting from '../../../public/animations/chatting.json';
import Desktop from '../../../public/animations/desktop.json';

export const TITLE_CONTENT = {
  title: 'AI 안전 채팅 필터링',
  description: '설정한 강도에 따른 AI가 대화 분석 채팅 필터링기능 탑재!',
};

export const DESCRIPTION =
  '사용자의 니즈에 맞춘 필터링 서비스를 통해 커뮤니티 분위기를 조율하세요';

export const INFO_CARD = [
  {
    key: 1,
    title: '채널 생성',
    description:
      '참여 인원, 필터링 강도 등을 설정하여 나만의 채널을 생성할 수 있어요',
    path: '/tutorial/channel',
    color: 'white',
    imgSrc: Channel,
  },
  {
    key: 2,
    title: 'AI 필터링',
    description:
      '강, 중, 약 내가 원하는 AI 안전 필터링 강도를 선택할 수 있어요',
    path: '/tutorial/filter',
    imgSrc: Manage,
    color: 'yellow',
  },
  {
    key: 3,
    title: '안전한 채팅',
    description:
      '채널 링크를 통해 접속한 익명의 사용자와 안전한 대화를 진행해요',
    path: '/tutorial/filter',
    color: 'white',
    imgSrc: Chatting,
  },
  {
    key: 4,
    title: '쉬운 관리',
    description: '채널 관리 페이지에서 채널정보를 수정할 수 있어요',
    path: '/tutorial/channel',
    color: 'red',
    imgSrc: Desktop,
  },
];
