import { useContext } from 'react';
import { toolsContext } from '../contexts/ToolsContext';

export function useTools() {
  const tools = useContext(toolsContext);
  return tools;
}
