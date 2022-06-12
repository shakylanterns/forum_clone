import React, { useState } from "react";
import { toast } from "react-toastify";
import LinkButton from "../Base/LinkButton";

type Props = {};

const SaveCommentButton = (props: Props) => {
  const [saved, setSaved] = useState(false);
  const saveComment = () => {
    if (saved) {
      toast("Comment removed from save", { type: "info" });
      setSaved(false);
      return;
    }
    toast("Comment Saved", { type: "success" });
    setSaved(true);
  };
  return (
    <LinkButton action={saveComment}>
      {saved ? "Unsave Comment" : "Save comment"}
    </LinkButton>
  );
};

export default SaveCommentButton;
