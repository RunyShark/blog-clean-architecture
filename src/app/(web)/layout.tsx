import { NavBar, Footer } from '@/presentation/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-hidden">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
