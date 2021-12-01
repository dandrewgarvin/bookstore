namespace Products {
  interface Item {
    name: string;
    href: string;
  }

  interface Featured extends Item {
    imageSrc: string;
    imageAlt: string;
  }

  interface Section {
    id: string;
    name: string;
    items: Item[];
  }

  export interface Category {
    id: string;
    name: string;
    featured: Featured[];
    sections: Section[];
  }

  export interface Page extends Item {}
}

export default Products;
