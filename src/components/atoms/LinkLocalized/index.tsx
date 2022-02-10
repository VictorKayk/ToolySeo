import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

interface LinkLocalizedProps {
  linkTo: string;
  children: ReactElement;
}

export function LinkLocalized({ linkTo, children }: LinkLocalizedProps) {
  const { locale } = useRouter();
  return (
    <Link href={linkTo} locale={locale}>
      {children}
    </Link>
  );
}
