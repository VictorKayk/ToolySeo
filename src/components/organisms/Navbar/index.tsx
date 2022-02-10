import { ReactElement, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { NavbarHeader } from '../../molecules/NavbarHeader';
import { NavbarIcons } from '../../molecules/NavbarIcons';

interface NavbarProps {
  searchBarPlaceholder: string;
  toolsGroup: {
    title: string;
    tools: {
      title: string;
      Icon: ReactElement;
      linkToPage: string;
    }[];
  }[];
}

export function Navbar({ searchBarPlaceholder, toolsGroup }: NavbarProps) {
  const [isOpen, setIsOpen] = useLocalStorage('isNavbarOpen', true);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const openWhenIsClose = () =>
    setIsOpen((prev) => (prev === true ? prev : true));

  return (
    <aside className="flex items-center flex-col gap-9 bg-secondary rounded-r-xl min-h-screen max-w-[15rem] py-5 px-7 text-color-white-80">
      <NavbarHeader
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        openWhenIsClose={openWhenIsClose}
        searchBarPlaceholder={searchBarPlaceholder}
      />
      <NavbarIcons isOpen={isOpen} toolsGroup={toolsGroup} />
    </aside>
  );
}
