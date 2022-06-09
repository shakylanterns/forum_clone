import type { NextPage } from "next";
import React, { useState } from "react";
import Layout from "../components/Layout";
import PostList from "../components/Post/PostList";
import PostSearch from "../components/Sorting/PostSearch";
import SortingControls from "../components/Sorting/SortingControls";
import { Post, SortingCriterion } from "../helpers/types";

// this is just temporary
const postList: Post[] = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi molestiae minus nisi eum corrupti id similique veniam quod dolorem deserunt reiciendis consequuntur aut sit a, labore ullam repellat autem.",
    id: 2,
    publishedAt: new Date(),
    title: "lorem ipsum dolor sit amet consectetur",
    topic: "dump",
    user: { id: 1, name: "lorem" },
  },
];

const Home: NextPage = () => {
  const [selected, setSelected] = useState<SortingCriterion>("none");

  return (
    <Layout>
      <div className="space-y-4">
        <SortingControls selected={selected} setSelected={setSelected} />
        <PostSearch />
        <PostList posts={postList} />
      </div>
    </Layout>
  );
};

export default Home;
