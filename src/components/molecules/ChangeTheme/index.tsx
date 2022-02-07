import { useTheme } from 'next-themes';
import { ChangeEvent } from 'react';
import { Option } from '../../atoms/Options';

interface ChangeThemeProps {
  system: {
    name: string;
    value: string;
  };
  light: {
    name: string;
    value: string;
  };
  dark: {
    name: string;
    value: string;
  };
}

export function ChangeTheme({ system, light, dark }: ChangeThemeProps) {
  const { theme, setTheme } = useTheme();

  const switchTheme = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
    setTheme(value);

  return (
    <select onChange={switchTheme} defaultValue={theme}>
      <Option name={system.name} value={system.value} />
      <Option name={light.name} value={light.value} />
      <Option name={dark.name} value={dark.value} />
    </select>
  );
}
