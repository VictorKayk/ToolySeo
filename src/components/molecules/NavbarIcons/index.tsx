import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { SmallTitleAndHorizontalLine } from '../SmallTitleAndHorizontalLine';
import { TitleIconAndLinkList } from '../TitleIconAndLinkList';

interface NavbarIconsProps {
  isOpen: boolean;
  toolsGroup: {
    title: string;
    tools: {
      title: string;
      Icon: ReactElement;
      linkToPage: string;
    }[];
  }[];
}

export function NavbarIcons({ isOpen, toolsGroup }: NavbarIconsProps) {
  return (
    <nav className="text-color-white-80 flex flex-col gap-10">
      {toolsGroup.map(({ title, tools }, index) => (
        <div className="flex flex-col gap-5" key={index}>
          <SmallTitleAndHorizontalLine title={title} isOpen={isOpen} />
          <TitleIconAndLinkList isOpen={isOpen} tools={tools} />
        </div>
      ))}
    </nav>
  );
}
