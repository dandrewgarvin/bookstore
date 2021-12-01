import { LoaderFunction, redirect } from 'remix';

export let loader: LoaderFunction = () => {
  return redirect('/products');
};

export default function Index() {
  return <main>oof</main>;
}
