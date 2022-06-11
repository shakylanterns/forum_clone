import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import YupPassword from "yup-password";
import Button from "../components/Base/Button";
import Input from "../components/Base/Form/Input";
import GreyBox from "../components/Base/GreyBox";
import { useRedirect } from "../helpers/useRedirect";

YupPassword(Yup);

type Props = {};

const Register = (props: Props) => {
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
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              username: Yup.string()
                .required("Name is required")
                .max(255, "The username may not be longer than 255 characters")
                .test({
                  message:
                    "Only uppercase and lowercase English characters, numbers and underscores are allowed",
                  name: "valid-username",
                  // if there is any character that is out of the set, gives out true then it is inverted
                  test: (value) => !/[^a-zA-z0-9_]/.test(value || ""),
                }),
              email: Yup.string().email().required("Email is required"),
              password: Yup.string()
                .password()
                .required("Password is required")
                .min(6)
                .minLowercase(1)
                .minUppercase(1)
                .minNumbers(1),
            })}
            onSubmit={() => {
              toast("Account Registered!", {
                type: "success",
              });
              redirect();
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
