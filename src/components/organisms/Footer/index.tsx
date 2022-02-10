import { ChangeLanguage } from '../../molecules/ChangeLanguage';
import { ChangeTheme } from '../../molecules/ChangeTheme';

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
}

export function Footer({ language, theme }: FooterProps) {
  return (
    <footer>
      <div>
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
    </footer>
  );
}
