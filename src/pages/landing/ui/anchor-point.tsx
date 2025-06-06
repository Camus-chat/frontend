'use client';

import { Link as HeroUILink } from '@heroui/react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  label: string;
  anchorPortalId: string;
}

const AnchorPoint = ({ label, anchorPortalId }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null,
  );

  const scroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setPortalContainer(document.getElementById(anchorPortalId));
  }, []);

  return (
    <div ref={ref}>
      {portalContainer &&
        createPortal(
          <HeroUILink
            className='cursor-pointer font-medium'
            color='foreground'
            size='sm'
            onPress={scroll}
          >
            {label}
          </HeroUILink>,
          portalContainer,
        )}
    </div>
  );
};

export default AnchorPoint;
