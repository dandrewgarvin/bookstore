export interface Book {
  id: number;
  name: string;
  description?: string;
  price: number;
  discount?: number;
  available: boolean;
  imageSrc: string;
  imageAlt: string;
}