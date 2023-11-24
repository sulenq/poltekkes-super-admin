import { create } from "zustand";
import { SortByTabelPegawai, SortOrder } from "../const/types";

type State = {
  sortBy: SortByTabelPegawai;
  sortOrder: SortOrder;
};

type Actions = {
  setSortOrder: (sortBy: State["sortOrder"]) => void;
  setSortBy: (sortOrder: State["sortBy"]) => void;
};

const useSortTabelPegawai = create<State & Actions>((set) => ({
  sortBy: "namaLengkap",
  sortOrder: "asc",
  setSortBy: (sortBy) => set(() => ({ sortBy: sortBy })),
  setSortOrder: (sortOrder) => set(() => ({ sortOrder: sortOrder })),
}));

export default useSortTabelPegawai;
