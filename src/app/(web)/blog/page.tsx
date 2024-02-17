import { Button, Card, Header } from '@/presentation/components';

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="flex-1 screen flex-col gap-16 mb-16">
        <div>
          <h1>Search</h1>
          <Button />
        </div>
        <Card />
      </div>
    </>
  );
}
