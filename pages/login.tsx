import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";
import Button from "../components/Base/Button";
import Input from "../components/Base/Form/Input";
import GreyBox from "../components/Base/GreyBox";

type Props = {};

const Login = (props: Props) => {
  const { query, push } = useRouter();

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
            onSubmit={() => {
              if (query.redirect instanceof Array) {
                push("/");
              } else {
                push(query.redirect || "/");
              }
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
