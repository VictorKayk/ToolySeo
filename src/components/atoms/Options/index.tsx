interface IOption {
  name: string;
  value: string;
}

export function Option({ name, value }: IOption) {
  return <option value={value}>{name}</option>;
}
