import { SearchBar } from '../SearchBar';
import { ReactElement } from 'react';
import { SmallTitleAndHorizontalLine } from '../SmallTitleAndHorizontalLine';
import { TitleIconAndLinkList } from '../TitleIconAndLinkList';

interface NavbarIconsAndSearchBarProps {
  openWhenIsClose: () => void;
  searchBarPlaceholder: string;

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

export function NavbarIconsAndSearchBar({
  isOpen,
  toolsGroup,
  openWhenIsClose,
  searchBarPlaceholder,
}: NavbarIconsAndSearchBarProps) {
  return (
    <div className="flex flex-col gap-9">
      <SearchBar
        isOpen={isOpen}
        openWhenIsClose={openWhenIsClose}
        placeholder={searchBarPlaceholder}
      />
      <nav className="text-color-white-80 flex flex-col gap-10">
        {toolsGroup.map(({ title, tools }, index) => (
          <div className="flex flex-col gap-5" key={index}>
            <SmallTitleAndHorizontalLine title={title} isOpen={isOpen} />
            <TitleIconAndLinkList isOpen={isOpen} tools={tools} />
          </div>
        ))}
      </nav>
    </div>
  );
}
