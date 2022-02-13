import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { ToolsContext } from '../contexts/ToolsContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <ToolsContext>
          <Component {...pageProps} />
        </ToolsContext>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
