import Image from 'next/image';

import Logo from '../../../assets/images/logo.svg';
import { useMediaQuery } from 'react-responsive';
import { MenuButton } from '../../atoms/MenuButton';

interface LogoAndMenuButtonProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export function LogoAndMenuButton({
  isOpen,
  toggleOpen,
}: LogoAndMenuButtonProps) {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <div className="flex gap-4">
      <MenuButton handleClick={toggleOpen} />
      {(isOpen || isMobile) && (
        <Image src={Logo} alt="Logo image" width={108} height={32} priority />
      )}
    </div>
  );
}
