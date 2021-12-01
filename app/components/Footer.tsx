export default function Footer() {
  return (
    <footer aria-labelledby='footer-heading' className='bg-white'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='border-t border-gray-100 py-10 sm:flex sm:items-center sm:justify-between'>
          <div className='flex items-center justify-center text-sm text-gray-500'>
            <p>Shipping to United States ($USD)</p>
            <p className='ml-3 border-l border-gray-200 pl-3'>English</p>
          </div>
          <p className='mt-6 text-sm text-gray-500 text-center sm:mt-0'>
            &copy; {new Date().getFullYear()} ControlBit Studios
          </p>
        </div>
      </div>
    </footer>
  );
}
