import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

import ProductDetails from '~/components/ProductDetails';

export let loader: LoaderFunction = ({ params }) => {
  return {
    id: params.id,
  };
};

export default function Product() {
  const productDetails = useLoaderData();

  return <ProductDetails {...productDetails} />;
}
