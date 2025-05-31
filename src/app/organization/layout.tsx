import { getAllTraining } from '@/api/services';
import { Header, Footer } from '@/components/common';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const { data } = await getAllTraining()

  return (
    <div>
      <Header data={data} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
