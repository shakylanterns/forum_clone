import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";
import YupPassword from "yup-password";
import Button from "../components/Base/Button";
import Input from "../components/Base/Form/Input";
import GreyBox from "../components/Base/GreyBox";

YupPassword(Yup);

type Props = {};

const Register = (props: Props) => {
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
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              username: Yup.string()
                .required("name is required")
                .max(255, "The username may not be longer than 255 characters"),
              email: Yup.string().email().required("email is required"),
              password: Yup.string()
                .password()
                .required()
                .min(6)
                .minLowercase(1)
                .minUppercase(1)
                .minNumbers(1),
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
                  <Input
                    name="username"
                    labelText="User name: "
                    placeholder="e.g. coolguy69"
                  />
                  <Input
                    name="email"
                    labelText="Email: "
                    placeholder="e.g. bob@domain.xyz"
                  />
                  <Input name="password" labelText="Password: " />
                  <Button type="submit">Register</Button>
                </Form>
              );
            }}
          </Formik>
        </GreyBox>
      </div>
    </div>
  );
};

export default Register;
