import Image from 'next/image';

import { MenuIcon } from '@heroicons/react/outline';

import Logo from '../../../assets/images/big-logo.svg';

interface LogoAndMenuButtonProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export function LogoAndMenuButton({
  isOpen,
  toggleOpen,
}: LogoAndMenuButtonProps) {
  return (
    <div className="flex items-center gap-3">
      <button onClick={toggleOpen}>
        <MenuIcon width={32} height={32} className="text-color-white-80" />
      </button>
      {isOpen && <Image src={Logo} alt="Logo image" width={78} height={29} />}
    </div>
  );
}
