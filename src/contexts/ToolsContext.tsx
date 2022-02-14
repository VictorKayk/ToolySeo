import { createContext, ReactElement, ReactNode } from 'react';
import { ChipIcon } from '@heroicons/react/outline';
import { useTranslation } from 'next-i18next';

interface ITools {
  title: string;
  description: string;
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
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      items: [
        { title: 'tool1', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
      ],
    },
    {
      title: t('Tools'),
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      items: [
        { title: 'tool1', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
      ],
    },
    {
      title: t('Tools'),
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      items: [
        { title: 'tool1', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
      ],
    },
    {
      title: t('Tools'),
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      items: [
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
      ],
    },
    {
      title: t('Tools'),
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      items: [
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
      ],
    },
    {
      title: t('Tools'),
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      items: [
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
      ],
    },
    {
      title: t('Tools'),
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
      items: [
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
        { title: 'tool', Icon: <ChipIcon />, linkToPage: '/' },
      ],
    },
    {
      title: t('Tools'),
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
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
