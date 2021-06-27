export type PostPreview = {
  title: string;
  slug: string;
  contentPreview: string;
  createdAt: string;
  createdAtISO: string;
  categories: Category[];
};

export type Category = {
  id: number;
  name: string;
  url: string;
};
