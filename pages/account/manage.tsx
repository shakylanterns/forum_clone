import React, { Fragment } from "react";
import ChangeInfoForm from "../../components/Dashboard/ChangeInfoForm";
import DeleteAccount from "../../components/Dashboard/DeleteAccount";
import Layout from "../../components/Layout";
import { User } from "../../helpers/types";

type Props = {};

// temporary
const user: User = {
  id: 1,
  name: "test",
};

const ManageUser = (props: Props) => {
  return (
    <Layout>
      <Fragment>
        <ChangeInfoForm user={user} />
        <DeleteAccount />
      </Fragment>
    </Layout>
  );
};

export default ManageUser;
