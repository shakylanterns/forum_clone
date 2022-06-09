import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Button from "../Base/Button";
import Textarea from "../Base/Form/Textarea";

type Props = {
  name: string;
  title?: string;
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

// TODO: Type the event correctly
type MouseEventWithId = React.MouseEvent & { target: { id: string } };

const CommentModal = ({ name, title, opened, setOpened }: Props) => {
  const closeModal = (event: MouseEventWithId) => {
    if (event.target.id === "comment-modal-wrapper") {
      setOpened(false);
    }
  };

  // the first div is the dark filter around the modal box
  if (opened) {
    return (
      <div
        className="fixed left-0 top-0 w-screen h-screen m-0 p-0 bg-gray-900 flex justify-center"
        id="comment-modal-wrapper"
        onClick={(e) => closeModal(e as unknown as MouseEventWithId)}
      >
        <div className="bg-white w-80p p-8 mt-16 h-80p">
          <p className="mb-6">
            Replying to {name} {title ? ` - ${title}` : `'s comment`}
          </p>
          <div className="space-y-4">
            <Formik
              initialValues={{
                content: "",
              }}
              validationSchema={Yup.object({
                content: Yup.string()
                  .required("Required")
                  .min(20, "The message has to be longer than 20 characters")
                  .max(
                    32768,
                    "This comment is too long. Please stay below 32768 characters"
                  ),
              })}
              onSubmit={(data) => {
                console.log(data);
              }}
            >
              {({ submitForm }) => {
                return (
                  <Form>
                    <Textarea
                      name="content"
                      labelText="Type your comment here:"
                      placeholder="I love this post. Keep writing!"
                    />
                    <div className="space-x-4">
                      <Button
                        onClick={(event) => {
                          event.preventDefault();
                          submitForm();
                        }}
                      >
                        Submit
                      </Button>
                      <Button
                        onClick={(event) => {
                          event.preventDefault();
                          setOpened(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CommentModal;
