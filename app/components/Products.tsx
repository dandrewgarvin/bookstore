import { Link } from 'remix';
import type { Book } from '~/types/books';

interface Props {
  products: Book[];
}

const Products: React.FC<Props> = ({ products }) => {
  return (
    <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8'>
      {products.map(product => {
        product.discount = product.discount ?? 0;
        const discounted = product.discount > 0;

        const displayPrice = discounted
          ? product.price - (product.price * product.discount) / 100
          : product.price;

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='group text-sm'
          >
            <div className='w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75 flex justify-center items-center'>
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className='w-full h-full object-center object-contain p-10'
              />
            </div>
            <h3 className='mt-4 font-medium text-gray-900'>{product.name}</h3>
            <p
              className={`${
                !product.available ? 'text-red-400' : 'text-gray-500'
              } italic`}
            >
              {product.available ? 'In Stock' : 'Out of Stock'}
            </p>
            <span className='flex'>
              {discounted && (
                <p className='mt-2 mr-2 font-medium text-red-400 line-through'>
                  {new Intl.NumberFormat('en-US', {
                    currency: 'USD',
                    style: 'currency',
                    currencyDisplay: 'symbol',
                  }).format(product.price)}
                </p>
              )}

              <p className='mt-2 font-medium text-gray-900'>
                {new Intl.NumberFormat('en-US', {
                  currency: 'USD',
                  style: 'currency',
                  currencyDisplay: 'symbol',
                }).format(displayPrice)}
              </p>
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
