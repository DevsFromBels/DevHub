export interface IQueryProvider {
  children: React.ReactNode;
}

export interface UserState {
  login: string;
  email: string;
  password: string;
}

export interface StoreState {
  user: UserState;
  updateUser: (newData: UserState) => void;
}
