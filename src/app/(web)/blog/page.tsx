import {
  CardBlog,
  Header,
  Search,
  AddNewBlog,
  Modal,
} from '@/presentation/components';

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="flex-1 screen flex-col gap-16 mb-16">
        <div className="flex justify-between">
          <Search />
          <AddNewBlog />
        </div>
        <CardBlog />
      </div>
    </>
  );
}
