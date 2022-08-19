export type LinkType = {
  id: string | number;
  description: string | null;
  url: string;
};

export type SingUpType = {
  name: string | null;
  email: string | null;
  firstPassword: string | null;
  secondPassword: string | null;
};
