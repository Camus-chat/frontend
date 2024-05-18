export const FILTER_OPTION = [
  { value: 'strong', name: '강' },
  { value: 'moderate', name: '중' },
  { value: 'weak', name: '약' },
];

export const FILTER_DESCRIPTION = {
  title: '필터링 강도에 대한 어쩌고 저쩌고',
  content: '필터링 강도를 설정하여 안전한 대화를 어쩌고 저쩌고',
};

export const CHANNEL_DESCRIPTION = [
  {
    title: '채팅 유형을 선택하세요',
    content: '프라이빗한 1:1 채팅을 원하시나요?',
  },
  {
    title: '채팅 유형을 선택하세요',
    content: '다수의 사람들과 채팅을 즐길 수도 있습니다.',
  },
  {
    title: '채팅 정보를 입력하세요',
    content:
      '채널명을 입력해주세요.\n채널의 목적에 맞는 키워드를 사용하면 좋습니다.',
  },
  {
    title: '채팅 정보를 입력하세요',
    content: '채널에 대한 한 줄 소개를 입력해주세요.',
  },
  {
    title: '필터링 강도를 설정하세요',
    content: '내가 원하는 만큼의 필터링 강도를 설정할 수 있어요.',
  },
  {
    title: '이런! 취소하기 버튼을 누르셨네요',
    content: '지금까지 입력한 정보가 사라지고, 방을 생성할 수 없습니다.',
  },
  {
    title: '생성하기 버튼을 눌러보세요',
    content: '생성하기 버튼을 누르면 입력한 정보를 바탕으로 채널이 생성됩니다.',
  },
];

export const CHANNEL_CREATE = {
  title: '채널 생성',
  content: '채팅 채널 생성에 필요한 정보를 입력해주세요.',
};

export const PRIVATE = true;
export const GROUP = false;

export const MENU = [
  { key: 'channel', path: 'channel', name: '채널 생성' },
  { key: 'filter', path: 'filter', name: '필터링 강도' },
];
