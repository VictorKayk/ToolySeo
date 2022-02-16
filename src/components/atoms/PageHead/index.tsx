import { useRouter } from 'next/router';
import Head from 'next/head';

interface PageHeadProps {
  title: string;
}

export function PageHead({ title }: PageHeadProps) {
  const { asPath } = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <link
        rel="alternate"
        hrefLang="en"
        href={`${process.env.NEXT_PUBLIC_WEB_URL}${asPath}`}
      />
      <link
        rel="alternate"
        hrefLang="pt"
        href={`${process.env.NEXT_PUBLIC_WEB_URL}/pt-BR${asPath}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${process.env.NEXT_PUBLIC_WEB_URL}${asPath}`}
      />
    </Head>
  );
}
