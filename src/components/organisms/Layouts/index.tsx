import { ReactNode } from 'react';
import { Footer } from '../../organisms/Footer';
import { Navbar } from '../../organisms/Navbar';
import { useTranslation } from 'next-i18next';
import { useTools } from '../../../hooks/useTools';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation('common');

  const tools = useTools();

  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start md:h-screen">
      <Navbar
        searchBarPlaceholder={t('searchBar-placeholder')}
        groups={tools}
      />
      <main className="h-full w-full flex flex-col items-center">
        {children}

        <Footer
          language={{
            english: {
              name: t('english-language'),
              value: 'en',
            },
            portuguese: {
              name: t('portuguese-language'),
              value: 'pt-BR',
            },
          }}
          theme={{
            system: {
              name: t('system-theme'),
              value: 'system',
            },
            dark: {
              name: t('dark-theme'),
              value: 'dark',
            },
            light: {
              name: t('light-theme'),
              value: 'light',
            },
          }}
          madeBy={{
            madeWith: t('made-with'),
            author: t('author'),
            linkTo: 'https://github.com/VictorKayk',
          }}
          copyright={t('copyright')}
          groups={tools}
          linkToGithub="https://github.com/VictorKayk/ToolySeo"
          linkToTwitter="https://twitter.com/VictorKayk77"
        />
      </main>
    </div>
  );
}
