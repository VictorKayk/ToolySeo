import { useMediaQuery } from 'react-responsive';

interface SmallTitleAndHorizontalLineProps {
  title: string;
  isOpen: boolean;
}

export function SmallTitleAndHorizontalLine({
  title,
  isOpen,
}: SmallTitleAndHorizontalLineProps) {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  let newTitle;

  if (isMobile) {
    newTitle = title;
  } else {
    if (isOpen) {
      newTitle = title;
    } else {
      newTitle = title.slice(0, 5);
    }
  }

  return (
    <div className="flex items-center justify-center gap-5">
      <h3 className="text-color-white-80 text-[1rem] md:text-[0.75rem] text-center">
        {newTitle}
      </h3>
      {(isOpen || isMobile) && <hr className="w-[90%] md:w-[70%] h-[1px]" />}
    </div>
  );
}
