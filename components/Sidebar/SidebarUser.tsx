import React from "react";
import { toast } from "react-toastify";
import { User } from "../../helpers/types";
import Anchor from "../Base/Anchor";
import Button from "../Base/Button";
import GreyBox from "../Base/GreyBox";

type Props = {
  user?: User;
};

const SidebarUser = ({ user }: Props) => {
  const handleLogout = () => {
    toast(`Logged out from ${user?.name}`, { type: "success" });
  };

  return (
    <GreyBox>
      {user ? (
        <div className="space-y-2">
          <p>
            Logged in as{" "}
            <Anchor href={`/account/${user.id}`}>{user.name}</Anchor>
          </p>
          <Button onClick={handleLogout}>Logout</Button>
          <Button href="/account/manage">Change User Info</Button>
        </div>
      ) : (
        <div className="flex flex-col space-y-4">
          <p>You are currently not logged in.</p>
          <Button href="/register">Register an Account</Button>
          <Button href="/login">Login</Button>
        </div>
      )}
    </GreyBox>
  );
};

export default SidebarUser;
