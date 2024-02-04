import DemoCard from '@/components/DemoCard';
import DemoCarousel from '@/components/DemoCarousel';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-7 py-5">
        <div className="mx-auto w-full max-w-5xl">
          <DemoCarousel heading="In der Nähe" />
          <DemoCarousel heading="Demnächst" />
        </div>
      </main>
      <Footer />
    </>
  );
}
