import Image from 'next/image';
import { ChangeLanguage } from '../../molecules/ChangeLanguage';
import { ChangeTheme } from '../../molecules/ChangeTheme';
import Logo from '../../../assets/images/logo.svg';

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
}

export function Footer({ language, theme, madeBy, copyright }: FooterProps) {
  return (
    <footer className="w-full bg-secondary flex flex-col items-center gap-12 rounded-t-xl p-7">
      <div className="flex justify-between">
        <section className="flex flex-col gap-8">
          <div className="">
            <Image
              src={Logo}
              alt="Logo image"
              width={108}
              height={32}
              priority
            />
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
        <section></section>
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
