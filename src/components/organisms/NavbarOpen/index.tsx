import { ReactElement, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
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
  handleClickOutside: () => void;
  isHidden: boolean;
}

export function NavbarOpen({
  searchBarPlaceholder,
  groups,
  toggleOpen,
  openWhenIsClose,
  handleClickOutside,
  isHidden,
}: NavbarProps) {
  const navRef = useRef<HTMLElement>(null);
  useOnClickOutside(navRef, handleClickOutside);
  return (
    <aside
      ref={navRef}
      className={`absolute md:fixed top-0 md:h-screen flex md:items-center flex-col gap-6 bg-secondary md:rounded-r-xl z-50 min-w-full min-h-screen md:min-h-screen md:min-w-[16rem] overflow-y-auto py-5 px-8 pb-20 md:py-5 md:px-4 text-color-white-80 ${
        isHidden && 'hidden scale-0'
      }`}
    >
      <NavbarHeader isOpen={true} toggleOpen={toggleOpen} />
      <NavbarIconsAndSearchBar
        isOpen={true}
        groups={groups}
        openWhenIsClose={openWhenIsClose}
        searchBarPlaceholder={searchBarPlaceholder}
      />
    </aside>
  );
}
