interface OptionProps {
  name: string;
  value: string;
}

export function Option({ name, value }: OptionProps) {
  return <option value={value}>{name}</option>;
}
