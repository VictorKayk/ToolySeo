import { SearchIcon } from '@heroicons/react/outline';
import { ChangeEvent } from 'react';
import { useMediaQuery } from 'react-responsive';

interface SearchBarProps {
  isOpen: boolean;
  openWhenIsClose: () => void;
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export function SearchBar({
  isOpen,
  openWhenIsClose,
  placeholder,
  handleChange,
  value,
}: SearchBarProps) {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <div
      className="flex items-center justify-center gap-1.5 bg-color-grey-70 rounded-xl max-h-8 py-2 text-color-white-80 hover:bg-color-pink transition-colors duration-150 delay-[10ms] shadow-md group"
      onClick={openWhenIsClose}
    >
      {(isOpen || isMobile) && (
        <input
          type="text"
          name="search"
          id="search"
          placeholder={placeholder}
          className=" min-w-[80%] md:max-w-[8rem] md:min-w-[8rem] ml-4 max-h-5 bg-transparent text-color-white-80 placeholder:text-color-white-80 border-none outline-none"
          onChange={handleChange}
          value={value}
        />
      )}
      <button className="mx-1">
        <SearchIcon width={24} height={24} className="text-color-white-80" />
      </button>
      {!isOpen && (
        <span className="absolute left-20 bg-secondary rounded-xl py-4 pr-4 scale-0 group-hover:scale-100 text-color-white-80 text-[1rem] group-hover:text-color-pink transition-all origin-left duration-150 delay-[10ms]">
          {placeholder}
        </span>
      )}
    </div>
  );
}
