import { SearchIcon } from '@heroicons/react/outline';
import { useRef } from 'react';

interface SearchBarProps {
  isOpen: boolean;
  openWhenIsClose: () => void;
  placeholder: string;
}

export function SearchBar({
  isOpen,
  openWhenIsClose,
  placeholder,
}: SearchBarProps) {
  return (
    <div
      className="flex items-center justify-center gap-1.5 bg-color-grey-70 rounded-xl max-h-8 max-w-44 py-2 text-color-white-80 hover:bg-color-pink transition-colors duration-150 delay-[10ms]"
      onClick={openWhenIsClose}
    >
      {isOpen && (
        <input
          type="text"
          name="search"
          id="search"
          placeholder={placeholder}
          className="max-w-[8rem] ml-4 max-h-5 bg-transparent text-color-white-80 placeholder:text-color-white-80 border-none outline-none"
        />
      )}
      <button className="mx-1">
        <SearchIcon width={24} height={24} className="text-color-white-80" />
      </button>
    </div>
  );
}
