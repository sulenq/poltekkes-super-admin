import { create } from "zustand";
import { DashboardsPeriode } from "../const/types";

type State = {
  periode: DashboardsPeriode;
};

type Actions = {
  setPeriode: (periode: State["periode"]) => void;
};

const useAdminDashboardsPeriodicFilter = create<State & Actions>((set) => ({
  periode: "Bulan Ini",
  setPeriode: (periode) => set(() => ({ periode: periode })),
}));

export default useAdminDashboardsPeriodicFilter;
