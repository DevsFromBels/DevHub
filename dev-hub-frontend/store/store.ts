import { create } from "zustand";
import { StoreState, UserState } from "../types/type";

const useStore = create<StoreState>((set) => ({
  user: {
    login: "",
    email: "",
    password: "",
  },
  updateUser: (newData: UserState) =>
    set((state) => ({
      user: {
        ...state.user,
        ...newData,
      },
    })),
}));

export { useStore };
