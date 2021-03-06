import { cloneElement, ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';
import { LinkLocalized } from '../../atoms/LinkLocalized';

interface TitleIconAndLinkListProps {
  isOpen: boolean;
  items: {
    title: string;
    Icon: ReactElement;
    linkToPage: string;
  }[];
}

export function TitleIconAndLinkList({
  isOpen,
  items,
}: TitleIconAndLinkListProps) {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <ul className="flex justify-around flex-wrap md:justify-start md:flex-col gap-12 md:gap-8">
      {items.map(({ title, Icon, linkToPage }, index) => (
        <li key={index}>
          <LinkLocalized linkTo={linkToPage}>
            <a className="flex flex-col md:flex-row items-center gap-4 ml-1 group">
              <div className="flex items-center justify-center text-color-white-80 bg-color-grey-70 w-8 h-8 rounded-[0.3125rem] rotate-45 group-hover:bg-color-pink transition-colors duration-150 delay-[10ms] shadow-md">
                {cloneElement(Icon, {
                  width: '24',
                  height: '24',
                  className: '-rotate-45',
                })}
              </div>
              {(isOpen || isMobile) && (
                <h4 className="text-color-white-80 text-[1rem] group-hover:text-color-pink transition-colors duration-150 delay-[10ms]">
                  {title}
                </h4>
              )}
            </a>
          </LinkLocalized>
        </li>
      ))}
    </ul>
  );
}
