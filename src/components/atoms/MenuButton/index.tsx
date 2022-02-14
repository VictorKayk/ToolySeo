import { MenuIcon } from '@heroicons/react/outline';

interface MenuButtonProps {
  handleClick: () => void;
}

export function MenuButton({ handleClick }: MenuButtonProps) {
  return (
    <button onClick={handleClick}>
      <MenuIcon
        width={32}
        height={32}
        className="text-color-white-80 hover:text-color-pink transition-colors duration-150 delay-[10ms]"
      />
    </button>
  );
}
