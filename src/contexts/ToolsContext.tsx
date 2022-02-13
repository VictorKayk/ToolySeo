import { createContext, ReactElement, ReactNode } from 'react';
import { ChipIcon } from '@heroicons/react/outline';
import { useTranslation } from 'next-i18next';

interface ITools {
  title: string;
  items: {
    title: string;
    Icon: ReactElement;
    linkToPage: string;
  }[];
}

export const toolsContext = createContext<ITools[] | []>([]);

interface ToolsContextProps {
  children: ReactNode;
}

export function ToolsContext({ children }: ToolsContextProps) {
  const { t } = useTranslation('tools');
  const tools = [
    {
      title: t('Tools'),
      items: [
        { title: 'tool1', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
      ],
    },
    {
      title: t('Tools'),
      items: [
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
      ],
    },
    {
      title: t('Tools'),
      items: [
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
      ],
    },
  ];
  return (
    <toolsContext.Provider value={tools}>{children}</toolsContext.Provider>
  );
}
