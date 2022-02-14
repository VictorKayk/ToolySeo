import { ReactElement, ReactNode } from 'react';
import { Footer } from '../../organisms/Footer';
import { NavbarClose } from '../NavbarClose';
import { useTranslation } from 'next-i18next';
import { useLocalStorage } from 'usehooks-ts';
import { NavbarOpen } from '../NavbarOpen';
import { useMediaQuery } from 'react-responsive';

interface LayoutProps {
  groups: {
    title: string;
    items: {
      title: string;
      Icon: ReactElement;
      linkToPage: string;
    }[];
  }[];
  children: ReactNode;
}

export function Layout({ groups, children }: LayoutProps) {
  const { t } = useTranslation('common');

  const [isOpen, setIsOpen] = useLocalStorage('isNavbarOpen', false);

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const openWhenIsClose = () =>
    setIsOpen((prev) => (prev === true ? prev : true));

  const handleClickOutsideNav = () => isOpen && !isMobile && setIsOpen(false);

  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start">
      <div
        className={`fixed w-full h-screen bg-[#0000007f] z-10 opacity-100 transition-opacity ${
          (!isOpen && !isMobile && 'hidden opacity-0') ||
          (isMobile && 'hidden opacity-0')
        }`}
      ></div>
      <NavbarOpen
        searchBarPlaceholder={t('searchBar-placeholder')}
        groups={groups}
        toggleOpen={toggleOpen}
        openWhenIsClose={openWhenIsClose}
        handleClickOutside={handleClickOutsideNav}
        isHidden={!isOpen}
      />
      <NavbarClose
        searchBarPlaceholder={t('searchBar-placeholder')}
        groups={groups}
        toggleOpen={toggleOpen}
        openWhenIsClose={openWhenIsClose}
      />
      <div className="w-full h-screen flex flex-col items-center justify-between md:ml-[6rem]">
        <main className="mb-8 py-9 px-7">{children}</main>
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
          groups={groups}
          linkToGithub="https://github.com/VictorKayk/ToolySeo"
          linkToTwitter="https://twitter.com/VictorKayk77"
        />
      </div>
    </div>
  );
}
