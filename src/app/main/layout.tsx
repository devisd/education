
import { Header, Footer } from '@/components/common';

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
