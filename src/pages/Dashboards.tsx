import React from "react";
import AdminContainer from "../components/AdminContainer";
import { Box } from "@chakra-ui/react";
import DashboardsPeriodicFilter from "../components/DashboardsPeriodicFilter";
import DashboardsSummary from "../components/DashboardsSummary";
import ChartTotalPengguna from "../components/ChartTotalPengguna";

export default function Dashboards() {
  return (
    <AdminContainer active={["Dashboards"]}>
      <>
        <Box alignSelf={"flex-end"} mb={4}>
          <DashboardsPeriodicFilter />
        </Box>

        <Box mb={4}>
          <DashboardsSummary />
        </Box>

        <Box mb={4}>
          <ChartTotalPengguna />
        </Box>
      </>
    </AdminContainer>
  );
}
