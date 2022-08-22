export type LinkType = {
  id: string | number;
  description: string | null;
  url: string;
};

export type SingUpType = {
  name: string;
  email: string;
  firstPassword: string;
  secondPassword: string;
};

export type SignInType = {
  email: string;
  password: string;
};
