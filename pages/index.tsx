import type { NextPage } from "next";
import React, { useState } from "react";
import Layout from "../components/Layout";
import SortingControls from "../components/SortingControls/SortingControls";
import { SortingCriterion } from "../helpers/types";

const Home: NextPage = () => {
  const [selected, setSelected] = useState<SortingCriterion>("none");

  return (
    <Layout>
      <div className="space-y-4">
        <SortingControls selected={selected} setSelected={setSelected} />
        {/* <GreyBox></GreyBox> */}
      </div>
    </Layout>
  );
};

export default Home;
