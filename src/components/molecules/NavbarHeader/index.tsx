import { LogoAndMenuButton } from '../../molecules/LogoAndMenuButton';

interface NavbarHeaderProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export function NavbarHeader({ isOpen, toggleOpen }: NavbarHeaderProps) {
  return (
    <header>
      <LogoAndMenuButton isOpen={isOpen} toggleOpen={toggleOpen} />
    </header>
  );
}
