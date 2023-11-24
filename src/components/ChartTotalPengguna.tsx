import {
  Box,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Circle } from "@phosphor-icons/react";
import useAdminDashboardsPeriodicFilter from "../globalState/useAdminDashboardsPeriodicFilter";
import { DashboardsPeriode } from "../const/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartTotalPengguna() {
  const bg = useColorModeValue("white", "dark");
  const { periode } = useAdminDashboardsPeriodicFilter();
  const getLabel = (periode: DashboardsPeriode) => {
    switch (periode) {
      case "Minggu Ini":
        return ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
      case "Bulan Ini":
        return [1, 2, 3, 4];
      case "Tahun Ini":
        return [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Mei",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Okt",
          "Nov",
          "Des",
        ];
    }
  };
  const getXLabel = (periode: DashboardsPeriode) => {
    switch (periode) {
      case "Minggu Ini":
        return "Hari";
      case "Bulan Ini":
        return "Minggu ke-";
      case "Tahun Ini":
        return "Bulan";
    }
  };

  // TODO get data
  const [data] = useState([8.2, 10.6, 5.9, 11]);
  const labels = getLabel(periode);
  const xLabel = getXLabel(periode);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Pemasukan",
        data: data,
        backgroundColor: "#ffffff",
        borderColor: "#2dc653",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xLabel,
        },
        grid: {
          color: "#b4b4b450",
        },
      },
      y: {
        grid: {
          color: "#b4b4b450",
        },
      },
    },
  };

  return (
    <Box borderRadius={16} p={[4, 6, 6]} bg={bg} overflow={"auto"}>
      <SimpleGrid mb={4} columns={[1, 2, 2]} gap={[0, 2, 2]}>
        <Text fontSize={[18, null, 20]} fontWeight={600} lineHeight={1.3}>
          Total Pengguna
        </Text>

        <HStack justifySelf={["flex-start", "flex-end", "flex-end"]}>
          <Icon as={Circle} weight={"fill"} color={"p.600"} />

          <Text fontSize={[10, null, 12]}>total pengguna</Text>
        </HStack>
      </SimpleGrid>

      <Box>
        <Line
          //@ts-ignore
          data={chartData}
          options={options}
        />
      </Box>
    </Box>
  );
}
