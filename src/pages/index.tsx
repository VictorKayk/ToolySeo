import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { HomeTemplate } from '../components/templates/Home';
import { Layout } from '../components/organisms/Layouts';
import { useTools } from '../hooks/useTools';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  const tools = useTools();

  return (
    <>
      <Head>
        <title>{`${t('website-name')} | Home`}</title>
        <link
          rel="alternate"
          hrefLang="en"
          href={`${process.env.NEXT_PUBLIC_WEB_URL}`}
        />
        <link
          rel="alternate"
          hrefLang="pt"
          href={`${process.env.NEXT_PUBLIC_WEB_URL}/pt-BR`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${process.env.NEXT_PUBLIC_WEB_URL}`}
        />
      </Head>
      <Layout groups={tools}>
        <HomeTemplate groups={tools} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common', 'tools'])),
  },
});

export default Home;
