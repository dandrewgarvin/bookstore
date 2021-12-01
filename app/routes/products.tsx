import { useState } from 'react';

import ProductSorting from '~/components/ProductSorting';
import Products from '~/components/Products';
import Filters from '~/components/Filters';

export default function BooksPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <ProductSorting setMobileFiltersOpen={setMobileFiltersOpen} />

      <section aria-labelledby='products-heading' className='pt-6 pb-24'>
        <h2 id='products-heading' className='sr-only'>
          Products
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10'>
          <Filters
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />

          <Products />
        </div>
      </section>
    </main>
  );
}
