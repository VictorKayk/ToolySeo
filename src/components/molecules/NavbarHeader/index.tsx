import { SearchBar } from '../SearchBar';
import { LogoAndMenuButton } from '../../molecules/LogoAndMenuButton';

interface NavbarHeaderProps {
  isOpen: boolean;
  toggleOpen: () => void;
  openWhenIsClose: () => void;
  searchBarPlaceholder: string;
}

export function NavbarHeader({
  isOpen,
  toggleOpen,
  openWhenIsClose,
  searchBarPlaceholder,
}: NavbarHeaderProps) {
  return (
    <header className="flex flex-col gap-6">
      <LogoAndMenuButton isOpen={isOpen} toggleOpen={toggleOpen} />
      <SearchBar
        isOpen={isOpen}
        openWhenIsClose={openWhenIsClose}
        placeholder={searchBarPlaceholder}
      />
    </header>
  );
}
