import { useState } from 'react';
import {
  CheckIcon,
  XIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from '@heroicons/react/solid';
import { RadioGroup } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/outline';

import classNames from '~/helpers/class-names';

import { Book } from '~/types/books';

const product = {
  name: 'Everyday Ruck Snack',
  href: '#',
  price: '$220',
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc:
    'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
  imageAlt:
    'Model wearing light green backpack with black canvas straps and front zipper pouch.',
  breadcrumbs: [
    { id: 1, name: 'Travel', href: '#' },
    { id: 2, name: 'Bags', href: '#' },
  ],
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
  ],
};
const reviews = { average: 4, totalCount: 1624 };

interface Props {
  product: Book;
}
const ProductDetails: React.FC<Props> = ({ product }) => {
  product.discount = product.discount ?? 0;
  const discounted = product.discount > 0;

  const displayPrice = discounted
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'>
        {/* Product details */}
        <div className='lg:max-w-lg lg:self-end'>
          <div className='mt-4'>
            <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              {product.name}
            </h1>
          </div>

          <section aria-labelledby='information-heading' className='mt-4'>
            <h2 id='information-heading' className='sr-only'>
              Product information
            </h2>

            <div className='flex items-center'>
              <span className='flex'>
                {discounted && (
                  <p className='text-lg sm:text-xl text-red-400 line-through'>
                    {new Intl.NumberFormat('en-US', {
                      currency: 'USD',
                      style: 'currency',
                      currencyDisplay: 'symbol',
                    }).format(product.price)}
                  </p>
                )}

                <p className='ml-2 text-lg sm:text-xl text-gray-900'>
                  {new Intl.NumberFormat('en-US', {
                    currency: 'USD',
                    style: 'currency',
                    currencyDisplay: 'symbol',
                  }).format(displayPrice)}
                </p>
              </span>

              <div className='ml-4 pl-4 border-l border-gray-300'>
                <h2 className='sr-only'>Reviews</h2>
                <div className='flex items-center'>
                  <div>
                    <div className='flex items-center'>
                      {[0, 1, 2, 3, 4].map(rating => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? 'text-yellow-400'
                              : 'text-gray-300',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden='true'
                        />
                      ))}
                    </div>
                    <p className='sr-only'>{reviews.average} out of 5 stars</p>
                  </div>
                  <p className='ml-2 text-sm text-gray-500'>
                    {reviews.totalCount} reviews
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-4 space-y-6'>
              <p className='text-base text-gray-500 whitespace-pre-line'>
                {product.description}
              </p>
            </div>

            <div className='mt-6 flex items-center'>
              {product.available ? (
                <>
                  <CheckIcon
                    className='flex-shrink-0 w-5 h-5 text-green-500'
                    aria-hidden='true'
                  />
                  <p className='ml-2 text-sm text-gray-500'>
                    In stock and ready to ship
                  </p>
                </>
              ) : (
                <>
                  <XIcon
                    className='flex-shrink-0 w-5 h-5 text-red-500'
                    aria-hidden='true'
                  />
                  <p className='ml-2 text-sm text-gray-500'>
                    Currently Unavailable
                  </p>
                </>
              )}
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className='mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center'>
          <div className='aspect-w-1 aspect-h-1 rounded-lg overflow-hidden'>
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className='w-full h-full object-center object-contain'
            />
          </div>
        </div>

        {/* Product form */}
        <div className='mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start'>
          <section aria-labelledby='options-heading'>
            <h2 id='options-heading' className='sr-only'>
              Product options
            </h2>

            <form>
              <div className='mt-10'>
                <button
                  type='submit'
                  disabled={!product.available}
                  className='w-full bg-indigo-600 disabled:bg-gray-300 disabled:cursor-not-allowed border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white disabled:text-gray-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500'
                >
                  Add to bag
                </button>
              </div>
              <div className='mt-6 text-center'>
                <a href='#' className='group inline-flex text-base font-medium'>
                  <ShieldCheckIcon
                    className='flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500'
                    aria-hidden='true'
                  />
                  <span className='text-gray-500 hover:text-gray-700'>
                    Lifetime Guarantee
                  </span>
                </a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
