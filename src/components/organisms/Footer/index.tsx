import Image from 'next/image';
import { ChangeLanguage } from '../../molecules/ChangeLanguage';
import { ChangeTheme } from '../../molecules/ChangeTheme';

import Logo from '../../../assets/images/logo.svg';
import GithubLogo from '../../../assets/icons/github/github32-light.png';
import TwitterLogo from '../../../assets/icons/twitter/twitter32-light.png';
import { ReactElement } from 'react';
import { LinkLocalized } from '../../atoms/LinkLocalized';

interface DefaultOption {
  name: string;
  value: string;
}

interface FooterProps {
  language: {
    english: DefaultOption;
    portuguese: DefaultOption;
  };
  theme: {
    system: DefaultOption;
    dark: DefaultOption;
    light: DefaultOption;
  };
  madeBy: {
    madeWith: string;
    author: string;
    linkTo: string;
  };
  copyright: string;
  groups: {
    title: string;
    items: {
      title: string;
      Icon: ReactElement;
      linkToPage: string;
    }[];
  }[];
}

export function Footer({
  language,
  theme,
  madeBy,
  copyright,
  groups,
}: FooterProps) {
  return (
    <footer className="w-full bg-secondary flex flex-col gap-12 rounded-t-xl p-7">
      <div className="flex flex-col gap-16">
        <section className="flex flex-col gap-10">
          <div>
            <Image src={Logo} alt="Logo image" width={108} height={32} />
            <p className="text-color-white-50 text-[0.75rem]">{copyright}</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <ChangeLanguage
              english={language.english}
              portuguese={language.portuguese}
            />
            <ChangeTheme
              system={theme.system}
              dark={theme.dark}
              light={theme.light}
            />
          </div>
        </section>
        <section className="flex flex-col gap-10">
          <ul className="flex flex-wrap gap-4 items-center justify-center text-color-white-80">
            {groups.map((group, indexGroup) =>
              group.items.map(({ title, linkToPage }, index) => (
                <li key={`${group.title}-${title}-${indexGroup}-${index}`}>
                  <LinkLocalized linkTo={linkToPage}>
                    <a className="hover:text-color-pink">{title}</a>
                  </LinkLocalized>
                </li>
              ))
            )}
          </ul>
          <ul className="flex justify-end gap-4">
            <li className="cursor-pointer">
              <a href="https://twitter.com/VictorKayk77">
                <Image
                  src={TwitterLogo}
                  alt="Twitter logo"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="https://github.com/VictorKayk/ToolySeo">
                <Image
                  src={GithubLogo}
                  alt="Github logo"
                  width={32}
                  height={32}
                />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <span className="text-center text-color-white-80 group transition-all duration-150 delay-[10ms]">
        {madeBy.madeWith}{' '}
        <a
          href={madeBy.linkTo}
          target="_blank"
          rel="noreferrer"
          className="group-hover:text-color-pink group-hover:underline"
        >
          {madeBy.author}
        </a>
      </span>
    </footer>
  );
}
