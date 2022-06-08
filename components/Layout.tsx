import React from "react";
import Container from "./Base/Container";
import Nav from "./Navigation/Nav";
import Sidebar from "./Sidebar/Sidebar";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="">
      <Nav />
      <main>
        <Container>
          <div className="lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="lg:col-span-2 xl:col-span-3">{children}</div>
            <div className="hidden lg:block lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Layout;
