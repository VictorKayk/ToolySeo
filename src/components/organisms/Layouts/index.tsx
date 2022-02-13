import { ReactNode } from 'react';
import { Footer } from '../../organisms/Footer';
import { Navbar } from '../../organisms/Navbar';
import { useTranslation } from 'next-i18next';
import { ChipIcon } from '@heroicons/react/outline';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start">
      <Navbar
        searchBarPlaceholder={t('searchBar-placeholder')}
        groups={[
          {
            title: 'Tools',
            items: [
              { title: 'tool1', Icon: <ChipIcon />, linkToPage: '/' },
              { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
              { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
              { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
              { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
              { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
            ],
          },
          {
            title: 'Tools',
            items: [
              { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
              { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
              { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
              { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
            ],
          },
          {
            title: 'Tools',
            items: [
              { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
              { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
              { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
              { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
            ],
          },
        ]}
      />
      <main>
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
        />
      </main>
    </div>
  );
}
