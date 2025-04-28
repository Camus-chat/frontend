'use client';

import { useEffect } from 'react';

const ErrorPage: FC<{
  error: Error & { digest?: string };
  reset: () => void;
}> = ({ error }) => {
  useEffect(() => {
    alert(error.message);
  }, []);

  return null;
};

export default ErrorPage;
