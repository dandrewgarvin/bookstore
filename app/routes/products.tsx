import { useState } from 'react';

import ProductSorting from '~/components/ProductSorting';
import Products from '~/components/Products';
import Filters from '~/components/Filters';
import { Book } from '~/types/books';

const products: Book[] = [
  {
    id: 1,
    name: 'Multithreaded JavaScript',
    price: 50,
    discount: 0,
    available: true,
    imageSrc: 'https://learning.oreilly.com/library/cover/9781098104429/250w/',
    imageAlt: 'Multithreaded Javascript book cover by O’Reilly Media',
  },
  {
    id: 2,
    name: 'Building Micro-frontends',
    price: 140,
    discount: 100,
    available: false,
    imageSrc: 'https://learning.oreilly.com/library/cover/9781492082989/250w/',
    imageAlt: 'Building Micro-frontends book cover by O’Reilly Media',
  },
  {
    id: 3,
    name: 'The Art of Computer Programming',
    price: 890,
    discount: 95,
    available: true,
    imageSrc:
      'https://images-na.ssl-images-amazon.com/images/I/81kQr9VRZCS.jpg',
    imageAlt: 'The Art of Computer Programming book cover by Donald Knuth',
  },
];

export default function ProductsPage() {
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

          <Products products={products} />
        </div>
      </section>
    </main>
  );
}
