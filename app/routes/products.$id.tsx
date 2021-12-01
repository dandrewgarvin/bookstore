import { redirect, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

import ProductDetails from '~/components/ProductDetails';
import BookService from '~/services/book-service';

export let loader: LoaderFunction = ({ params }) => {
  const book_service = new BookService();

  const book = book_service.getBook(Number(params.id));

  if (book) {
    return book;
  }

  return redirect('/products');
};

export default function Product() {
  const book = useLoaderData();

  return <ProductDetails product={book} />;
}
