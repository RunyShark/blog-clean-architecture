import { CardBlog, Header, Search } from '@/presentation/components';

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="flex-1 screen flex-col gap-16 mb-16">
        <Search />
        <CardBlog />
      </div>
    </>
  );
}
