import { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavbarHeader } from '../../molecules/NavbarHeader';
import { NavbarIconsAndSearchBar } from '../../molecules/NavbarIconsAndSearchBar';

interface NavbarProps {
  searchBarPlaceholder: string;
  groups: {
    title: string;
    items: {
      title: string;
      Icon: ReactElement;
      linkToPage: string;
    }[];
  }[];
  toggleOpen: () => void;
  openWhenIsClose: () => void;
}

export function NavbarClose({
  searchBarPlaceholder,
  groups,
  toggleOpen,
  openWhenIsClose,
}: NavbarProps) {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <aside className="md:h-screen flex md:items-center flex-col gap-6 bg-secondary rounded-b-xl md:rounded-bl-none md:rounded-r-xl min-w-full md:min-h-screen md:min-w-[6rem] md:max-w-[15rem] overflow-y-auto py-5 px-8 md:px-6 text-color-white-80">
      <NavbarHeader isOpen={false} toggleOpen={toggleOpen} />
      {!isMobile && (
        <NavbarIconsAndSearchBar
          isOpen={false}
          groups={groups}
          openWhenIsClose={openWhenIsClose}
          searchBarPlaceholder={searchBarPlaceholder}
        />
      )}
    </aside>
  );
}
