import Image from 'next/image';

import { MenuIcon } from '@heroicons/react/outline';

import Logo from '../../../assets/images/logo.svg';
import { useMediaQuery } from 'react-responsive';

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
      <button onClick={toggleOpen}>
        <MenuIcon
          width={32}
          height={32}
          className="text-color-white-80 hover:text-color-pink transition-colors duration-150 delay-[10ms]"
        />
      </button>
      {(isOpen || isMobile) && (
        <Image src={Logo} alt="Logo image" width={108} height={32} priority />
      )}
    </div>
  );
}
