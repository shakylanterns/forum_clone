import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Anchor from "../Base/Anchor";
import Container from "../Base/Container";
import NavTopics from "./NavTopics";

type Props = {};

const Nav = (props: Props) => {
  // this only makes sense in mobile
  const [barsOpen, setBarsOpen] = useState(false);
  return (
    <div className="border-b-2 border-gray-300 py-4 mb-12 bg-white relative">
      <Container>
        <div className="flex items-center justify-between md:justify-start">
          <span className="mr-8 font-bold text-xl text-brand">
            <Link href="/">Forum Clone</Link>
          </span>
          <FaBars
            className="md:hidden md:disabled cursor-pointer w-4 h-4 inline-block text-brand"
            onClick={() => setBarsOpen((bars) => !bars)}
          />
          <div
            className={`${
              barsOpen ? "visible" : "hidden"
            } top-16  bg-white w-screen right-0 absolute md:relative md:top-0 md:w-auto md:inline-block`}
          >
            <ul className="space-y-4 items-center mx-auto w-80p pt-4 pb-8 md:pt-0 md:pb-0 md:w-auto md:visible md:flex md:space-x-4 md:space-y-0">
              <li className="">
                <Anchor href="/">Home</Anchor>
              </li>
              <NavTopics />
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nav;
