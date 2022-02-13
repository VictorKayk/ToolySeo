import { SearchBar } from '../SearchBar';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { SmallTitleAndHorizontalLine } from '../SmallTitleAndHorizontalLine';
import { TitleIconAndLinkList } from '../TitleIconAndLinkList';
import { useDebounce } from 'usehooks-ts';

interface IGroup {
  title: string;
  items: {
    title: string;
    Icon: ReactElement;
    linkToPage: string;
  }[];
}

interface NavbarIconsAndSearchBarProps {
  openWhenIsClose: () => void;
  searchBarPlaceholder: string;
  isOpen: boolean;
  groups: IGroup[];
}

export function NavbarIconsAndSearchBar({
  isOpen,
  groups,
  openWhenIsClose,
  searchBarPlaceholder,
}: NavbarIconsAndSearchBarProps) {
  const [search, setSearch] = useState('');
  const [groupResult, setGroupResult] = useState<IGroup[]>([]);
  const debounceValue = useDebounce(search, 500);

  const handleSearch = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    setSearch(value.toLowerCase());

  useEffect(() => {
    setGroupResult(
      groups.filter((group) => {
        if (group.title.toLowerCase().includes(debounceValue)) return true;
        return group.items.find(({ title }) =>
          title.toLowerCase().includes(debounceValue)
        );
      })
    );
  }, [groups, debounceValue]);

  return (
    <div className="flex flex-col gap-9">
      <SearchBar
        isOpen={isOpen}
        openWhenIsClose={openWhenIsClose}
        placeholder={searchBarPlaceholder}
        handleChange={handleSearch}
        value={search}
      />
      <nav className="text-color-white-80 flex flex-col gap-10">
        {groupResult.map(({ title, items }, index) => (
          <div className="flex flex-col gap-5" key={index}>
            <SmallTitleAndHorizontalLine title={title} isOpen={isOpen} />
            <TitleIconAndLinkList isOpen={isOpen} items={items} />
          </div>
        ))}
      </nav>
    </div>
  );
}
