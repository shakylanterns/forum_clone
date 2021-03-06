import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { toast } from "react-toastify";
import GreyBox from "../Base/GreyBox";

type Props = {};

const DeleteAccount = (props: Props) => {
  const router = useRouter();
  const handleDeletion = () => {
    toast("Account Deleted! Sorry to see you go...", { type: "info" });
    // now only pushes the user back to the main page
    setTimeout(() => {
      router.push("/");
    }, 200);
  };

  return (
    <GreyBox>
      <Fragment>
        <h2 className="font-bold text-xl">Dangerous Actions</h2>
        <button
          className="bg-red-500 py-2 px-5 text-white my-5"
          onClick={handleDeletion}
        >
          Delete My Account
        </button>
        <p className="text-red-500 font-bold">
          Warning: This action is irreversible!
        </p>
      </Fragment>
    </GreyBox>
  );
};

export default DeleteAccount;
