import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b even:bg-[#0D1117] odd:bg-[#21262D]'>
        <Hero />
      </section>
      <section className='padding even:bg-[#0D1117] odd:bg-[#21262D]'>
        <PopularProducts />
      </section>
      <section className='padding even:bg-[#0D1117] odd:bg-[#21262D]'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10 even:bg-[#0D1117] odd:bg-[#21262D]'>
        <Services />
      </section>
      <section className='padding even:bg-[#0D1117] odd:bg-[#21262D]'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding even:bg-[#0D1117] odd:bg-[#21262D]'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full even:bg-[#0D1117] odd:bg-[#21262D]'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
