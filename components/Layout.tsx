import React from "react";
import Container from "./Base/Container";
import Nav from "./Navigation/Nav";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="">
      <Nav />
      <main>
        <Container>
          <div>
            {children}
            <div>Sidebar</div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Layout;
