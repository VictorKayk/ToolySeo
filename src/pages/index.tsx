import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ChangeLanguage } from '../components/molecules/ChangeLanguage';
import { ChangeTheme } from '../components/molecules/ChangeTheme';
import { signIn } from 'next-auth/react';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>{t('title')}</h1>
        <ChangeTheme
          system={{ name: t('system-theme'), value: 'system' }}
          dark={{ name: t('dark-theme'), value: 'dark' }}
          light={{ name: t('light-theme'), value: 'light' }}
        />
        <br />
        <ChangeLanguage
          english={{
            name: t('english-language'),
            value: 'en',
          }}
          portuguese={{
            name: t('portuguese-language'),
            value: 'pt-BR',
          }}
        />
        <br />
        <button onClick={() => signIn('github')}>Entrar Github</button>
        <br />
        <button onClick={() => signIn('google')}>Entrar Gogle</button>
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
