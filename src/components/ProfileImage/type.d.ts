import {
  COLORS,
  PROFILE_IMAGE_SIZE,
} from '@/components/ProfileImage/constants';

type ProfileImageSize = keyof typeof PROFILE_IMAGE_SIZE;

type ProfileColor = (typeof COLORS)[number];
