import { Link } from 'remix';
import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';

import MobileFilters from './MobileFilters';

const filters = [
  {
    id: 'genre',
    name: 'Genre',
    options: [
      { value: 'computer-science', label: 'Computer Science', checked: true },
      { value: 'mathematics', label: 'Mathematics', checked: true },
      { value: 'security', label: 'Security', checked: true },
      { value: 'compilers', label: 'Compilers', checked: true },
      { value: 'networking', label: 'Networking', checked: true },
      { value: 'software-design', label: 'Software Design', checked: true },
      { value: 'testing', label: 'Testing', checked: true },
      { value: 'philosophical', label: 'Philosophical', checked: true },
      { value: 'non-fiction', label: 'Non-Fiction', checked: true },
      { value: 'biography', label: 'Biography', checked: true },
      { value: 'game-design', label: 'Game Design', checked: true },
      { value: 'ethics-law', label: 'Software Ethics & Law', checked: true },
    ],
  },
  {
    id: 'author',
    name: 'Author',
    options: [
      { value: 'knuth', label: 'Knuth', checked: false },
      { value: 'martin', label: 'Martin', checked: false },
      { value: 'kernighan', label: 'Kernighan', checked: false },
      { value: 'lamport', label: 'Lamport', checked: false },
      { value: 'beck', label: 'Beck', checked: false },
      { value: 'aho', label: 'Aho', checked: false },
      { value: 'ritchie', label: 'Ritchie', checked: false },
    ],
  },
  {
    id: 'language-environment',
    name: 'Language / Environment',
    options: [
      {
        value: 'model-checking',
        label: 'Model Checking (TLA+)',
        checked: false,
      },
      { value: 'unix', label: 'Unix', checked: false },
      { value: 'clang', label: 'CLang', checked: false },
      { value: 'javascript', label: 'JavaScript', checked: false },
      { value: 'rust', label: 'Rust', checked: false },
      { value: 'go', label: 'Go', checked: false },
    ],
  },
];

interface Props {
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (mobileFiltersOpen: boolean) => void;
}
const Filters: React.FC<Props> = ({
  mobileFiltersOpen,
  setMobileFiltersOpen,
}) => {
  return (
    <>
      <MobileFilters
        filters={filters}
        subCategories={[]}
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
      />

      <form className='hidden lg:block'>
        {filters.map((section, index) => (
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
    </>
  );
};

export default Filters;
