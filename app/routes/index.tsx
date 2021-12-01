import type { LoaderFunction } from 'remix';

import classNames from '~/helpers/class-names';

import Header from '~/components/Header';
import ProductSorting from '~/components/ProductSorting';
import MobileFilters from '~/components/MobileFilters';
import Filters from '~/components/Filters';
import Products from '~/components/Products';
import Footer from '~/components/Footer';

export let loader: LoaderFunction = () => {
  return {};
};

import { useState } from 'react';

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className='bg-white'>
      <Header />

      <div>
        <MobileFilters
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
        />

        <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <ProductSorting setMobileFiltersOpen={setMobileFiltersOpen} />

          <section aria-labelledby='products-heading' className='pt-6 pb-24'>
            <h2 id='products-heading' className='sr-only'>
              Products
            </h2>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10'>
              <Filters />

              <Products />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
