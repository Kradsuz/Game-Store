export type UserFromBackand = {
  id: number;
  username: string;
};

export type UserLoginForm = {
  email: string;
  pass: string;
};

export type UserSubmitForm = {
  email: string;
  username: string;
  pass: string;
};

export type UserType = {
  user?: UserFromBackand;
  status: 'fetching' | 'logged' | 'err' | 'idle';
};
