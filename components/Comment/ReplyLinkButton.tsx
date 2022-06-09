import React, { useState } from "react";
import LinkButton from "../Base/LinkButton";
import CommentModal from "./CommentModal";

type Props = {};

const ReplyLinkButton = (props: Props) => {
  // whether the comment modal is opened
  const [opened, setOpened] = useState(false);

  const replyComment = () => {
    setOpened(true);
  };
  return (
    <div>
      <LinkButton action={replyComment}>Reply</LinkButton>
      <CommentModal opened={opened} setOpened={setOpened} name="" />
    </div>
  );
};

export default ReplyLinkButton;
