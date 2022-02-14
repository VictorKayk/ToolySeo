import { cloneElement, ReactElement } from 'react';
import { LinkLocalized } from '../../atoms/LinkLocalized';

interface HomeTemplateProps {
  groups: {
    title: string;
    description: string;
    items: {
      title: string;
      Icon: ReactElement;
      linkToPage: string;
    }[];
  }[];
}

export function HomeTemplate({ groups }: HomeTemplateProps) {
  return (
    <div className="md:max-w-maxWidth flex flex-col gap-16">
      {groups.map(({ title, description, items }) => (
        <div key={title} className="flex flex-col gap-16">
          <div>
            <h2 className="text-center font-bold">{title}</h2>
            <p className="text-center text-[1rem] text-color-grey font-bold">
              {description}
            </p>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {items.map(({ title, Icon, linkToPage }, index) => (
              <li key={index}>
                <LinkLocalized linkTo={linkToPage}>
                  <a className="flex flex-col items-center gap-4 ml-1 group">
                    <div className="flex items-center justify-center text-color-white-80 bg-color-grey-70 w-9 h-9 rounded-[0.3125rem] rotate-45 group-hover:bg-color-pink transition-colors duration-150 delay-[10ms] shadow-md">
                      {cloneElement(Icon, {
                        width: '28',
                        height: '28',
                        className: '-rotate-45',
                      })}
                    </div>
                    <h4 className="text-color-grey-70 text-[1.2rem] font-bold group-hover:text-color-pink transition-colors duration-150 delay-[10ms]">
                      {title}
                    </h4>
                  </a>
                </LinkLocalized>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
