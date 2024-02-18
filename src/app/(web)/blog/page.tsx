import {
  CardBlog,
  Header,
  Search,
  AddNewBlog,
  Modal,
  Title,
} from '@/presentation/components';

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="flex-1 screen flex-col gap-16 mb-16">
        <div className="flex justify-between">
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
