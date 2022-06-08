import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Anchor from "../Base/Anchor";
import Container from "../Base/Container";
import NavTopics from "./NavTopics";
import NavUser from "./NavUser";

type Props = {};

const Nav = (props: Props) => {
  // this only makes sense in mobile
  const [barsOpen, setBarsOpen] = useState(false);
  return (
    <div className="border-b-2 border-gray-300 py-4 mb-12 bg-white relative">
      <Container>
        <div className="flex items-center justify-between lg:justify-start">
          <span className="mr-8 font-bold text-xl text-brand">
            <Link href="/">Forum Clone</Link>
          </span>
          <FaBars
            className="lg:hidden lg:disabled cursor-pointer w-4 h-4 inline-block text-brand"
            onClick={() => setBarsOpen((bars) => !bars)}
          />
          {/* The navigation will be a dropdown list when the screen is below lg */}
          <div
            className={`${
              barsOpen ? "visible" : "hidden"
            } top-16  bg-white w-screen right-0 absolute lg:relative lg:top-0 lg:w-auto lg:inline-block`}
          >
            <ul className="space-y-4 items-center mx-auto w-80p pt-4 pb-8 lg:pt-0 lg:pb-0 lg:w-auto lg:visible lg:flex lg:space-x-4 lg:space-y-0">
              <li className="">
                <Anchor href="/">Home</Anchor>
              </li>
              <NavTopics />
              <div className="lg:hidden">
                <NavUser />
              </div>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nav;
