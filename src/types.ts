export type Book = {
  id: number;
  bookName: string;
  bookAuthor: string;
  bookPrice: number;
  cathegory: string[];
  inStock: boolean;
  details: {
    review: string;
    date: Date;
    imgCover?: string;
  };
};
