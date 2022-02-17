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
  linkToGithub: string;
  linkToTwitter: string;
  contactUs: { title: string; linkTo: string };
  privacy: { title: string; linkTo: string };
  terms: { title: string; linkTo: string };
}

export function Footer({
  language,
  theme,
  madeBy,
  copyright,
  groups,
  linkToGithub,
  linkToTwitter,
  contactUs,
  privacy,
  terms,
}: FooterProps) {
  return (
    <footer className="w-full bg-secondary rounded-t-xl px-7 py-8 md:py-12 flex md:justify-center">
      <div className="w-full md:max-w-maxWidth flex flex-col items-center gap-12">
        <div className="flex flex-col md:justify-center gap-12">
          <section className="flex flex-col md:flex-row md:justify-between gap-10">
            <div className="min-w-[50%]">
              <LinkLocalized linkTo="/">
                <a className="max-h-[32px] max-w-[108px]">
                  <Image
                    src={Logo}
                    alt="Logo image"
                    width={108}
                    height={32}
                    priority
                  />
                </a>
              </LinkLocalized>
              <p className="text-color-white-50 text-[0.75rem]">{copyright}</p>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 md:gap-y-1 items-center justify-center text-color-white-80 md:justify-end text-[0.90rem]">
              {groups.map((group, indexGroup) =>
                group.items.map(({ title, linkToPage }, index) => (
                  <li key={`${group.title}-${title}-${indexGroup}-${index}`}>
                    <LinkLocalized linkTo={linkToPage}>
                      <a className="hover:text-color-pink">{title}</a>
                    </LinkLocalized>
                  </li>
                ))
              )}
              <li>
                <LinkLocalized linkTo={contactUs.linkTo}>
                  <a className="hover:text-color-pink">{contactUs.title}</a>
                </LinkLocalized>
              </li>
              <li>
                <LinkLocalized linkTo={privacy.linkTo}>
                  <a className="hover:text-color-pink">{privacy.title}</a>
                </LinkLocalized>
              </li>
              <li>
                <LinkLocalized linkTo={terms.linkTo}>
                  <a className="hover:text-color-pink">{terms.title}</a>
                </LinkLocalized>
              </li>
            </ul>
          </section>
          <section className="flex flex-col md:flex-row items-end md:items-center gap-10 md:gap-[4rem] md:justify-between">
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
            <ul className="flex gap-4">
              <li className="cursor-pointer">
                <a href={linkToTwitter}>
                  <Image
                    src={TwitterLogo}
                    alt="Twitter logo"
                    width={32}
                    height={32}
                  />
                </a>
              </li>
              <li className="cursor-pointer">
                <a href={linkToGithub}>
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
        <span className="w-fit text-center text-color-white-80 group transition-all duration-150 delay-[10ms]">
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
      </div>
    </footer>
  );
}
