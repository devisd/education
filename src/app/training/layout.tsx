import { Header, Footer } from '@/components/common';
import { getAllTraining } from '@/api/services';

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
