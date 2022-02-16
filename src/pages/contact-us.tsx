import type { NextPage, GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageHead } from '../components/atoms/PageHead';
import { Layout } from '../components/organisms/Layouts';
import { useTools } from '../hooks/useTools';

const ContactUs: NextPage = () => {
  const { t } = useTranslation('common');
  const tools = useTools();

  return (
    <>
      <PageHead title={`${t('website-name')} | ${t('contact-us')}`} />
      <Layout groups={tools}>
        <div className="md:max-w-maxWidth">
          <div className="flex flex-col gap-6 px-9 pb-10 pt-4 shadow-md">
            <h2 className="text-center text-color-pink font-bold">
              {t('contact-us')}
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6 group">
                <h3 className="text-[1.5rem]">Email:</h3>
                <a
                  href="mailto:victorkayk77@gmail.com"
                  className="text-color-grey group-hover:text-color-pink group-hover:underline transition-colors duration-150 delay-[10ms]"
                >
                  <span>victorkayk77@gmail.com</span>
                </a>
              </div>
              <div className="flex items-center gap-6 group">
                <h3 className="text-[1.5rem]">Github:</h3>
                <a
                  href="https://github.com/VictorKayk"
                  className="text-color-grey group-hover:text-color-pink group-hover:underline transition-colors duration-150 delay-[10ms]"
                >
                  <span>VictorKayk</span>
                </a>
              </div>
              <div className="flex items-center gap-6 group">
                <h3 className="text-[1.5rem]">Email:</h3>
                <a
                  href="https://twitter.com/VictorKayk77"
                  className="text-color-grey group-hover:text-color-pink group-hover:underline transition-colors duration-150 delay-[10ms]"
                >
                  <span>VictorKayk77</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common', 'tools'])),
  },
});

export default ContactUs;
