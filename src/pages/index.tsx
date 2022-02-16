import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { HomeTemplate } from '../components/templates/Home';
import { Layout } from '../components/organisms/Layouts';
import { useTools } from '../hooks/useTools';
import { PageHead } from '../components/atoms/PageHead';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const tools = useTools();

  return (
    <>
      <PageHead title={`${t('website-name')} | Home`} />
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
