import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
];

const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
];

export default function Filters() {
  return (
    <form className='hidden lg:block'>
      <h3 className='sr-only'>Categories</h3>
      <ul
        role='list'
        className='text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200'
      >
        {subCategories.map(category => (
          <li key={category.name}>
            <a href={category.href}>{category.name}</a>
          </li>
        ))}
      </ul>

      {filters.map(section => (
        <Disclosure
          as='div'
          key={section.id}
          className='border-b border-gray-200 py-6'
        >
          {({ open }) => (
            <>
              <h3 className='-my-3 flow-root'>
                <Disclosure.Button className='py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>
                    {section.name}
                  </span>
                  <span className='ml-6 flex items-center'>
                    {open ? (
                      <MinusSmIcon className='h-5 w-5' aria-hidden='true' />
                    ) : (
                      <PlusSmIcon className='h-5 w-5' aria-hidden='true' />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className='pt-6'>
                <div className='space-y-4'>
                  {section.options.map((option: any, optionIdx: any) => (
                    <div key={option.value} className='flex items-center'>
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type='checkbox'
                        defaultChecked={option.checked}
                        className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className='ml-3 text-sm text-gray-600'
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </form>
  );
}
