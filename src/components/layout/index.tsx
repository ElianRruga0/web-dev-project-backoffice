import { useRouter } from "next/router";
import React, { FC, PropsWithChildren } from "react";
import Header from "./Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      {router.pathname.includes("login") ? <></> : <Header />}
      <div className="bg-zinc-500 bg-opacity-10 backdrop-blur-2xl  min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
