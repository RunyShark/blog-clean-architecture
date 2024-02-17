import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '@/presentation/store';
import '../presentation/styles/global.scss';
import { InternetConnectionProvider } from '@/presentation/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <InternetConnectionProvider>{children}</InternetConnectionProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
