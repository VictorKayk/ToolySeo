import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { useCookies } from 'react-cookie';
import { Option } from '../../atoms/Options';
import { Select } from '../../atoms/Select';

interface ChangeLanguageProps {
  english: {
    name: string;
    value: string;
  };
  portuguese: {
    name: string;
    value: string;
  };
}

export function ChangeLanguage({ english, portuguese }: ChangeLanguageProps) {
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
    <Select onChange={switchLanguage} defaultValue={locale}>
      <Option name={english.name} value={english.value} />
      <Option name={portuguese.name} value={portuguese.value} />
    </Select>
  );
}
