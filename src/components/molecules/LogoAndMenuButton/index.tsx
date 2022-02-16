import Image from 'next/image';

import Logo from '../../../assets/images/logo.svg';
import { useMediaQuery } from 'react-responsive';
import { MenuButton } from '../../atoms/MenuButton';
import { LinkLocalized } from '../../atoms/LinkLocalized';

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
        <LinkLocalized linkTo="/">
          <a className="max-h-[32px] max-w-[108px]">
            <Image
              src={Logo}
              alt="Logo image"
              width={108}
              height={32}
              priority
            />
          </a>
        </LinkLocalized>
      )}
    </div>
  );
}
