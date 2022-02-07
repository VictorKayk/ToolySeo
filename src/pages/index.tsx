import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LanguageSelect } from '../components/molecules/LanguageSelect';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>{t('title')}</h1>
        <LanguageSelect
          english={{
            name: t('english-language'),
            value: 'en',
          }}
          portuguese={{
            name: t('portuguese-language'),
            value: 'pt-BR',
          }}
        />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

export default Home;
