type ButtonSize = 'small' | 'large';

const COLORS = [
  'blue',
  'lightgray',
  'gray',
  'skyblue',
  'login',
  'transparent',
  'black',
] as const;

type ButtonColor = (typeof COLORS)[number];
