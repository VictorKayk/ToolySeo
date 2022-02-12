import { ReactElement, useRef } from 'react';
import { useLocalStorage, useOnClickOutside } from 'usehooks-ts';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { NavbarHeader } from '../../molecules/NavbarHeader';
import { NavbarIconsAndSearchBar } from '../../molecules/NavbarIconsAndSearchBar';

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
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const navRef = useRef<HTMLElement>(null);

  const [isOpen, setIsOpen] = useLocalStorage('isNavbarOpen', true);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const openWhenIsClose = () =>
    setIsOpen((prev) => (prev === true ? prev : true));

  const handleClickOutsideNav = () => !isMobile && isOpen && setIsOpen(false);

  useOnClickOutside(navRef, handleClickOutsideNav);
  return (
    <>
      <aside
        ref={navRef}
        className="flex md:items-center flex-col gap-6 bg-secondary rounded-b-xl md:rounded-bl-none md:rounded-r-xl min-w-full md:min-h-screen md:min-w-[6rem] md:max-w-[15rem] overflow-y-auto py-5 px-8 md:px-6 text-color-white-80 static md:absolute lg:static"
      >
        <NavbarHeader isOpen={isOpen} toggleOpen={toggleOpen} />
        {((isOpen && isMobile) || !isMobile) && (
          <NavbarIconsAndSearchBar
            isOpen={isOpen}
            toolsGroup={toolsGroup}
            openWhenIsClose={openWhenIsClose}
            searchBarPlaceholder={searchBarPlaceholder}
          />
        )}
      </aside>
      <MediaQuery minWidth={'768px'} maxWidth={'1024px'}>
        {<div className="min-w-[6rem] h-screen"></div>}
      </MediaQuery>
    </>
  );
}
