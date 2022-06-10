import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Button from "../../components/Base/Button";
import Input from "../../components/Base/Form/Input";
import GreyBox from "../../components/Base/GreyBox";
import Layout from "../../components/Layout";
import { User } from "../../helpers/types";

type Props = {};

// temporary
const user: User = {
  id: 1,
  name: "test",
};

const ManageUser = (props: Props) => {
  const [changingPass, setChangingPass] = useState(false);
  return (
    <Layout>
      <GreyBox>
        <div className="space-y-4">
          <Formik
            onSubmit={(data, { setFieldError }) => {
              if (changingPass && data.oldPassword === data.password) {
                setFieldError(
                  "password",
                  "New password may not be the same as the old one."
                );
              }
            }}
            initialValues={{
              name: user.name,
              password: "",
              oldPassword: "",
              confirm: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required(),
              confirm: Yup.string().test(
                "not-changing-password",
                "Please confirm the password first.",
                (value) => {
                  if (changingPass) return true;
                  return !changingPass && !!value;
                }
              ),
              oldPassword: Yup.string().test(
                "changing-password",
                "Please type the current password.",
                (value) => {
                  if (!changingPass) return true;
                  return changingPass && !!value;
                }
              ),
              password: Yup.string().test(
                "changing-password",
                "Please type the new password.",
                (value) => {
                  if (!changingPass) return true;
                  return changingPass && !!value;
                }
              ),
            })}
          >
            <Form>
              <Input name="name" labelText="Name: " />
              {changingPass ? (
                <div className="mb-4">
                  <Input name="oldPassword" labelText="Current Password: " />
                  <Input name="password" labelText="New Password: " />
                  <Button onClick={() => setChangingPass(false)}>Cancel</Button>
                </div>
              ) : (
                <div className="mb-4">
                  <Input name="confirm" labelText="Confirm Password: " />
                  <Button onClick={() => setChangingPass(true)}>
                    Change Password Instead
                  </Button>
                </div>
              )}
              <Button type="submit">Submit</Button>
            </Form>
          </Formik>
        </div>
      </GreyBox>
    </Layout>
  );
};

export default ManageUser;
