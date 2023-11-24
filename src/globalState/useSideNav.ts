import { create } from "zustand";

type State = {
  isOpen: boolean;
};

type Actions = {
  setIsOpen: (isOpen: boolean) => void;
};

const useSideNav = create<State & Actions>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set(() => ({ isOpen: isOpen })),
}));

export default useSideNav;
