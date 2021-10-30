export type PostPreview = {
  title: string;
  slug: string;
  contentPreview: string;
  createdAt: string;
  createdAtISO: string;
  categories: Category[];
  coverImageUrl: string;
};

export type Category = {
  name: string;
  url: string;
  slug: string;
};
