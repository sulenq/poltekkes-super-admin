import { create } from "zustand";
import { SortByTabelCustomer, SortOrder } from "../const/types";

type State = {
  sortBy: SortByTabelCustomer;
  sortOrder: SortOrder;
};

type Actions = {
  setSortOrder: (sortBy: State["sortOrder"]) => void;
  setSortBy: (sortOrder: State["sortBy"]) => void;
};

const useSortTabelCustomer = create<State & Actions>((set) => ({
  sortBy: "namaLengkap",
  sortOrder: "asc",
  setSortBy: (sortBy) => set(() => ({ sortBy: sortBy })),
  setSortOrder: (sortOrder) => set(() => ({ sortOrder: sortOrder })),
}));

export default useSortTabelCustomer;
