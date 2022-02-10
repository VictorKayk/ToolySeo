interface SmallTitleAndHorizontalLineProps {
  title: string;
  isOpen: boolean;
}

export function SmallTitleAndHorizontalLine({
  title,
  isOpen,
}: SmallTitleAndHorizontalLineProps) {
  return (
    <div className="flex items-center justify-center gap-5">
      <h3 className="text-color-white-80 text-[0.75rem] text-center">
        {title}
      </h3>
      {isOpen && <hr className="w-36 h-[1px]" />}
    </div>
  );
}
