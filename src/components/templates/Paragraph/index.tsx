import { TitleAndParagraph } from '../../molecules/TitleAndParagraph';

interface ParagraphTemplateProps {
  title: string;
  paragraph: string;
}

export function ParagraphTemplate({
  title,
  paragraph,
}: ParagraphTemplateProps) {
  return (
    <div className="md:max-w-maxWidth">
      <TitleAndParagraph title={title} paragraph={paragraph} />
    </div>
  );
}
