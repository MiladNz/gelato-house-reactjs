import type React from "react";
// import { Footer } from "./footer";
import { Header } from "./header";
import type { PropsWithChildren } from "react";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {/* <main>{children}</main>
      <Footer /> */}
    </>
  );
};
