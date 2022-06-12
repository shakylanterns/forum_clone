import { Form, Formik, FormikValues } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Button from "../../../components/Base/Button";
import Input from "../../../components/Base/Form/Input";
import Textarea from "../../../components/Base/Form/Textarea";
import GreyBox from "../../../components/Base/GreyBox";
import Layout from "../../../components/Layout";

type Props = {};

const AddPost = (props: Props) => {
  const router = useRouter();
  // now it just does nothing and transport the player back to the topic page
  const handleSubmit = (data: FormikValues) => {
    // the toast is disappearing for no reason?
    toast("Post Added", { type: "success" });
    setTimeout(() => {
      router.push(`/topic/${router.query.topicId}`);
    }, 200);
  };

  return (
    <Layout>
      <div>
        <GreyBox>
          <Formik
            initialValues={{
              title: "",
              topic: router.query.topicId,
              content: "",
            }}
            validationSchema={Yup.object({
              title: Yup.string()
                .required("Required")
                .max(
                  255,
                  "This title is too long. Please stay below 255 characters"
                ),
              content: Yup.string().max(
                32768,
                "This post body is too long. Please stay below 32768 characters"
              ),
            })}
            onSubmit={handleSubmit}
          >
            {() => {
              return (
                <Form>
                  <Input name="title" labelText="Title: " />
                  <Input
                    name="topic"
                    labelText="Will be posted in: "
                    disabled
                  />
                  <Textarea name="content" labelText="Post body: " />
                  <Button type="submit">Submit</Button>
                </Form>
              );
            }}
          </Formik>
        </GreyBox>
      </div>
    </Layout>
  );
};

export default AddPost;
