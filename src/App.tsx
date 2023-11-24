import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { globalTheme } from "./chakraTheme/globalTheme";
import "./globalStyle.css";
import RequireAuth from "./middleware/RequireAuth";
import Dashboards from "./pages/Dashboards";
import MissingPage from "./pages/MissingPage";
import PenggunaPegawai from "./pages/PenggunaPegawai";
import PenggunaCustomer from "./pages/PenggunaCustomer";

export const App = () => (
  <ChakraProvider theme={globalTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/dashboards"
          element={
            <RequireAuth>
              <Dashboards />
            </RequireAuth>
          }
        />

        <Route
          path="/pengguna-pegawai"
          element={
            <RequireAuth>
              <PenggunaPegawai />
            </RequireAuth>
          }
        />

        <Route
          path="/pengguna-customer"
          element={
            <RequireAuth>
              <PenggunaCustomer />
            </RequireAuth>
          }
        />

        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
