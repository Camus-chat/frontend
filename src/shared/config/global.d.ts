type FC<Props> = import('react').FC<Props>;
type ReactNode = import('react').ReactNode;
type ErrorPage = FC<{
  error: Error & { digest?: string };
  reset: () => void;
}>;
