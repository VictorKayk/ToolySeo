interface TitleAndParagraphProps {
  title: string;
  paragraph: string;
}

export function TitleAndParagraph({
  title,
  paragraph,
}: TitleAndParagraphProps) {
  return (
    <div className="flex flex-col gap-6 px-9 pb-10 pt-4 shadow-md">
      <h2 className="text-center text-color-pink font-bold">{title}</h2>
      <p className="text-color-grey font-bold">{paragraph}</p>
    </div>
  );
}
