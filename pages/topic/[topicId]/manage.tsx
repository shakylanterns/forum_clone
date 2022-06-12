import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Button from "../../../components/Base/Button";
import Input from "../../../components/Base/Form/Input";
import GreyBox from "../../../components/Base/GreyBox";
import Layout from "../../../components/Layout";

type Props = {};

const Manage = (props: Props) => {
  const { push, query } = useRouter();
  return (
    <Layout>
      <GreyBox>
        <Formik
          initialValues={{
            name: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
          })}
          onSubmit={() => {
            toast("The topic name has changed", { type: "success" });
            setTimeout(() => {
              push(`/topic/${query.topicId}`);
            }, 200);
          }}
        >
          <Form>
            <Input
              name="old"
              labelText="Current name: "
              disabled
              value={"test"}
            />
            <Input name="name" labelText="New name: " />
            <Button type="submit">Submit</Button>
          </Form>
        </Formik>
      </GreyBox>
    </Layout>
  );
};

export default Manage;
