export type UserFromBackand = {
  id: number;
  name: string;
};

export type UserLoginForm = {
  email: string;
  pass: string;
};

export type UserSubmitForm = {
  email: string;
  name: string;
  pass: string;
};

export type UserType = {
  user?: UserFromBackand;
  status: 'fetching' | 'logged' | 'err' | 'idle';
};
