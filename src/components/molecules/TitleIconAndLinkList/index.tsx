import { cloneElement, ReactElement } from 'react';
import { LinkLocalized } from '../../atoms/LinkLocalized';

interface TitleIconAndLinkListProps {
  isOpen: boolean;
  tools: {
    title: string;
    Icon: ReactElement;
    linkToPage: string;
  }[];
}

export function TitleIconAndLinkList({
  isOpen,
  tools,
}: TitleIconAndLinkListProps) {
  return (
    <ul className="flex flex-col gap-8">
      {tools.map(({ title, Icon, linkToPage }, index) => (
        <li key={index}>
          <LinkLocalized linkTo={linkToPage}>
            <a className="flex items-center gap-4 ml-1">
              <div className="flex items-center justify-center text-color-white-80 bg-color-grey-70 w-8 h-8 rounded-[0.3125rem] rotate-45">
                {cloneElement(Icon, {
                  width: '24',
                  height: '24',
                  className: '-rotate-45',
                })}
              </div>
              {isOpen && (
                <h4 className="text-color-white-80 text-[1rem]">{title}</h4>
              )}
            </a>
          </LinkLocalized>
        </li>
      ))}
    </ul>
  );
}
