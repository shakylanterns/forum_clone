import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Button from "../../../components/Base/Button";
import Layout from "../../../components/Layout";
import PostList from "../../../components/Post/PostList";
import PostSearch from "../../../components/Sorting/PostSearch";
import SortingControls from "../../../components/Sorting/SortingControls";
import { SortingCriterion } from "../../../helpers/types";

type Props = {};

const PostPage = (props: Props) => {
  const router = useRouter();
  const [selected, setSelected] = useState<SortingCriterion>("none");
  return (
    <Layout>
      <div className="space-y-4">
        <SortingControls selected={selected} setSelected={setSelected} />
        <PostSearch />
        <Button onClick={() => router.push(router.asPath + "/addPost")}>
          <div className="flex items-center space-x-2">
            <FaPlus className="w-4 h-4" />
            <span>Add New Post</span>
          </div>
        </Button>
        <PostList posts={[]} />
      </div>
    </Layout>
  );
};

export default PostPage;
