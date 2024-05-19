export const FILTER_OPTION = [
  { value: 'strong', name: '강' },
  { value: 'moderate', name: '중' },
  { value: 'weak', name: '약' },
];

export const FILTER_DESCRIPTION = {
  title: '감정 필터링 강도',
  content:
    '필터링 강도를 골라주세요.\n 안전한 커뮤니티 분위기를 조성할 수 있습니다.',
};

export const FILTER_MESSAGES = [
  {
    targetId: '',
    noticeType: '',
    senderId: '',
    filteredLevel: 100,
    type: 'CommonMessage' as MessageType,
    userId: '',
    content: '필터링 강도를 설정하고',
    messageId: 0,
    createdDate: '',
  },
  {
    targetId: '',
    noticeType: '',
    senderId: '',
    filteredLevel: 100,
    type: 'CommonMessage' as MessageType,
    userId: '',
    content: '여기에 채팅을 보내보세요!',
    messageId: 1,
    createdDate: '',
  },
];

export const MENU = [
  { key: 'channel', path: 'channel', name: '채널 생성' },
  { key: 'filter', path: 'filter', name: '필터링 강도' },
];
