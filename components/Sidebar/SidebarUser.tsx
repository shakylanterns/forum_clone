import React from "react";
import { User } from "../../helpers/types";
import Anchor from "../Base/Anchor";
import Button from "../Base/Button";
import GreyBox from "../Base/GreyBox";

type Props = {
  user?: User;
};

const SidebarUser = ({ user }: Props) => {
  return (
    <GreyBox>
      {user ? (
        <div>
          <p>
            Logged in as{" "}
            <Anchor href={`/account/${user.id}`}>{user.name}</Anchor>
          </p>
          <Button>Logout</Button>
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
