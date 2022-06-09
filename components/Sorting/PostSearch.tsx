import debounce from "lodash.debounce";
import React, { ChangeEventHandler, useMemo } from "react";
import GreyBox from "../Base/GreyBox";

type Props = {};

const PostSearch = (props: Props) => {
  const handler: ChangeEventHandler<HTMLInputElement> = useMemo(
    () =>
      debounce(function (event) {
        console.log(event.target.value);
      }, 300),
    []
  );

  return (
    <GreyBox needPadding={false}>
      <input
        type="text"
        name="search"
        onChange={handler}
        placeholder="Type something..."
        className="inline-block w-full px-4 py-2 appearance-none outline-brand"
      ></input>
    </GreyBox>
  );
};

export default PostSearch;
