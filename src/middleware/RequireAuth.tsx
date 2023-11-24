// import React, { useState, useEffect } from "react";
// import FullPageLogo from "../components/FullPageLogo";
// import { getCookie } from "typescript-cookie";
// import { useNavigate } from "react-router-dom";

type Props = { children: JSX.Element };

export default function RequireAuth({ children }: Props) {
  // const [page, setPage] = useState(<FullPageLogo />);
  // const navigate = useNavigate();

  // const userData = getCookie("userData");

  // useEffect(() => {
  //   if (userData) {
  //     setPage(children);
  //   } else {
  //     navigate("/");
  //   }
  // }, [children, navigate, userData]);

  return children;
}
