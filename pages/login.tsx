import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Button from "../components/Base/Button";
import Input from "../components/Base/Form/Input";
import GreyBox from "../components/Base/GreyBox";
import { useRedirect } from "../helpers/useRedirect";

type Props = {};

const Login = (props: Props) => {
  const { redirect } = useRedirect();
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div>
        <span className="font-bold text-3xl text-brand text-center block mb-4">
          <Link href="/">Forum Clone</Link>
        </span>
        <GreyBox additionalClasses="md:w-96">
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={Yup.object({
              username: Yup.string().required("name is required"),
              password: Yup.string().required(),
            })}
            onSubmit={({ username }) => {
              toast(`Logged in to ${username}`, {
                type: "success",
              });
              redirect();
            }}
          >
            {() => {
              return (
                <Form className="space-y-4">
                  <Input name="username" labelText="User name: " />
                  <Input name="password" labelText="Password: " />
                  <Button type="submit">Login</Button>
                </Form>
              );
            }}
          </Formik>
        </GreyBox>
      </div>
    </div>
  );
};

export default Login;
