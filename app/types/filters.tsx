namespace Filters {
  interface FilterOption {
    value: string;
    label: string;
    checked: boolean;
  }

  export interface Filter {
    id: string;
    name: string;
    options: FilterOption[];
  }

  export interface Category {
    name: string;
    href: string;
  }
}

export default Filters;
