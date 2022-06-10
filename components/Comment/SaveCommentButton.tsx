import React from "react";
import LinkButton from "../Base/LinkButton";

type Props = {};

const SaveCommentButton = (props: Props) => {
  const saveComment = () => {};
  return <LinkButton action={saveComment}>Save Comment</LinkButton>;
};

export default SaveCommentButton;
