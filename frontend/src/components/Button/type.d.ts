type ButtonSize = 'small' | 'large';

const _COLORS = [
  'blue',
  'lightgray',
  'gray',
  'skyblue',
  'login',
  'transparent',
  'black',
] as const;

type ButtonColor = (typeof _COLORS)[number];
