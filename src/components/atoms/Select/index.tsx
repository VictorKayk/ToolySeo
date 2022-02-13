import { ReactNode, SelectHTMLAttributes } from 'react';

export function Select({
  children,
  ...props
}: JSX.IntrinsicElements['select']) {
  return (
    <select
      {...props}
      className="p-2 rounded-xl text-color-white-80 bg-color-grey-70 hover:bg-color-grey shadow-md md:p-1 lg:p-2"
    >
      {children}
    </select>
  );
}
