import { Header } from "@components";
import { Suspense } from "react";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<b>Loading...</b>}>{children}</Suspense>
    </>
  );
};
