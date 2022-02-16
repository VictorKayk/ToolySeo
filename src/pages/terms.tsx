import type { NextPage, GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageHead } from '../components/atoms/PageHead';
import { Layout } from '../components/organisms/Layouts';
import { ParagraphTemplate } from '../components/templates/Paragraph';
import { useTools } from '../hooks/useTools';

const Terms: NextPage = () => {
  const { t } = useTranslation('common');
  const tools = useTools();

  return (
    <>
      <PageHead title={`${t('website-name')} | ${t('terms-of-service')}`} />
      <Layout groups={tools}>
        <ParagraphTemplate
          title={t('terms-of-service')}
          paragraph={t('terms')}
        />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common', 'tools'])),
  },
});

export default Terms;
