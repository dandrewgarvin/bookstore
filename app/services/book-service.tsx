import type { Book } from '~/types/books';

class BookService {
  books: Book[];

  constructor() {
    this.books = [
      {
        id: 1,
        name: 'Multithreaded JavaScript',
        description: `Traditionally, JavaScript has been a single-threaded language. Nearly all online forum posts, books, online documentation, and libraries refer to the language as single threaded. Thanks to recent advancements in the language--such as the Atomics and SharedArrayBuffers objects and Web Workers in the browser--JavaScript is now a multi-threaded language. These features will go down as being the biggest paradigm shift for the world's most popular programming language.\n\nMultithreaded JavaScript explores the various features that JavaScript runtimes have at their disposal for implementing multithreaded programming, providing both practical real-world examples, as well as reference material.`,
        price: 50,
        discount: 0,
        available: true,
        imageSrc:
          'https://learning.oreilly.com/library/cover/9781098104429/250w/',
        imageAlt: 'Multithreaded Javascript book cover by O’Reilly Media',
      },
      {
        id: 2,
        name: 'Building Micro-frontends',
        description: `What's the answer to today's increasingly complex web applications? Micro-frontends. Inspired by the microservices model, this approach lets you break interfaces into separate features managed by different teams of developers. With this practical guide, Luca Mezzalira shows software architects, tech leads, and software developers how to build and deliver artifacts atomically rather than use a big bang deployment.\n\nYou'll learn how micro-frontends enable your team to choose any library or framework. This gives your organization technical flexibility and allows you to hire and retain a broad spectrum of talent. Micro-frontends also support distributed or colocated teams more efficiently. Pick up this book and learn how to get started with this technological breakthrough right away.`,
        price: 140,
        discount: 100,
        available: false,
        imageSrc:
          'https://learning.oreilly.com/library/cover/9781492082989/250w/',
        imageAlt: 'Building Micro-frontends book cover by O’Reilly Media',
      },
      {
        id: 3,
        name: 'The Art of Computer Programming',
        description: `The Art of Computer Programming (TAOCP) is a comprehensive monograph written by computer scientist Donald Knuth that covers many kinds of programming algorithms and their analysis. Knuth began the project, originally conceived as a single book with twelve chapters, in 1962.`,
        price: 890,
        discount: 95,
        available: true,
        imageSrc:
          'https://images-na.ssl-images-amazon.com/images/I/81kQr9VRZCS.jpg',
        imageAlt: 'The Art of Computer Programming book cover by Donald Knuth',
      },
    ];
  }

  getBook(id: number) {
    return this.books.find(book => book.id === id);
  }

  getBooks() {
    return this.books;
  }
}

export default BookService;
