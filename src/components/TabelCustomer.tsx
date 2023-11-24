import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useCompareValues from "../utils/useCompareValues";
import useSortTabelCustomer from "../globalState/useSortTabelCustomer";
import TabelPegawaiAksi from "./TabelPegawaiAksi";

export default function TabelCustomer() {
  // TODO get data
  const [initialData] = useState([
    {
      id: "1",
      username: "user1",
      email: "example@examplemail.com",
      namaLengkap: "Panjul Aselole",
      instansi: "Udinus Jaya",
      telepon: "0852671876343",
      alamat: "Jalan Kenangan Dia",
    },
    {
      id: "2",
      username: "user2",
      email: "example@examplemail.com",
      namaLengkap: "Jolitos Kurniawan",
      instansi: "Polines",
      telepon: "0852671876343",
      alamat: "Jalan Kenangan Mantan yang lalu",
    },
    {
      id: "3",
      username: "user3",
      email: "example@examplemail.com",
      namaLengkap: "Naomi Sinaga",
      instansi: "Poltekkes",
      telepon: "0852671876343",
      alamat: "Jalan Kenangan Mantan 2",
    },
    {
      id: "4",
      username: "user4",
      email: "example@examplemail.com",
      namaLengkap: "Karlitos Simmeon",
      instansi: "Undip",
      telepon: "0852671876343",
      alamat: "Jalan Kenangan Mantan",
    },
  ]);
  const [data, setData] = useState([...initialData]);
  const { sortBy, sortOrder } = useSortTabelCustomer();
  const compareValues = useCompareValues;
  useEffect(() => {
    const sorted = [...initialData].sort(compareValues(sortBy, sortOrder));
    setData(sorted);
  }, [sortBy, sortOrder, compareValues, initialData]);

  return (
    <Box
      borderRadius={8}
      border={"1px solid var(--divider3)"}
      overflow={"auto"}
      className="scrollX"
    >
      <Table variant={"striped"} colorScheme="ad">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th whiteSpace={"nowrap"}>Nama Lengkap</Th>
            <Th>Nomor Ponsel</Th>
            <Th>Instansi/Perusahaan</Th>
            <Th>Alamat</Th>
            <Th></Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((d, i) => (
            <Tr key={i}>
              <Td>{d.id}</Td>
              <Td>{d.username}</Td>
              <Td>{d.email}</Td>
              <Td whiteSpace={"nowrap"}>{d.namaLengkap}</Td>
              <Td>{d.telepon}</Td>
              <Td>{d.instansi}</Td>
              <Td minW={"300px"}>{d.alamat}</Td>
              <Td>
                <TabelPegawaiAksi id={d.id} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
