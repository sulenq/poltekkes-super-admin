import { Layout, UsersThree } from "@phosphor-icons/react";

const adminNav = [
  {
    name: "Dashboards",
    icon: Layout,
    nested: false,
    link: "/dashboards",
  },
  {
    name: "Pengguna",
    icon: UsersThree,
    nested: true,
    subNav: [
      {
        name: "Pegawai",
        link: "/pengguna-pegawai",
      },
      {
        name: "Customer",
        link: "/pengguna-customer",
      },
    ],
  },
];

export default adminNav;
