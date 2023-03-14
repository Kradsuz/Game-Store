export type UserFromBackend = {
  id: number;
  username: string;
  img: string
};

export type UserLoginForm = {
  email: string;
  pass: string;
};

export type UserSubmitForm = {
  email: string;
  username: string;
  pass: string;
  roleId: unknown;
  confirmPass: string;
};

export type UserType = {
  user?: UserFromBackend;
  status: 'fetching' | 'logged' | 'err' | 'idle';
};
