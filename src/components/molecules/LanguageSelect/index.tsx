import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { useCookies } from 'react-cookie';
import { Option } from '../../atoms/Options';

interface ILanguageSelect {
  english: {
    name: string;
    value: string;
  },
  portuguese: {
    name: string;
    value: string;
  },
}

export function LanguageSelect({ english, portuguese }: ILanguageSelect) {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const [cookie, setCookie] = useCookies(['NEXT_LOCALE']);

  function switchLanguage({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) {
    if (cookie.NEXT_LOCALE !== value) {
      setCookie('NEXT_LOCALE', value, {
        path: asPath,
        sameSite: 'none',
        secure: true,
      });
    }
    router.push({ pathname, query }, asPath, { locale: value });
  }

  return (
    <select onChange={switchLanguage} defaultValue={locale}>
      <Option name={english.name} value={english.value} />
      <Option name={portuguese.name} value={portuguese.value} />
    </select>
  );
}
