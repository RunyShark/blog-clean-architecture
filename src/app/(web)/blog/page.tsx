export const dynamic = 'force-dynamic';
import {
  CardBlog,
  Header,
  Search,
  AddNewBlog,
} from '@/presentation/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Blog AI`,
  category: 'blog, IA, tecnologia',
  authors: {
    name: 'Sergio Dario Moreno Sosa',
    url: 'https://github.com/RunyShark',
  },
  creator: 'Sergio Dario Moreno Sosa',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: `/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png`,
        href: `/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png`,
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: `/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png`,
        href: `/Dall-e_3_(jan_'24)_artificial_intelligence_icon.png`,
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="flex-1 screen flex-col gap-16 mb-16">
        <div className="flex justify-between flex-col gap-8 md:flex-row">
          <Search />
          <div className="flex flex-col justify-end">
            <AddNewBlog />
          </div>
        </div>
        <CardBlog />
      </div>
    </>
  );
}
