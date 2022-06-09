import { useField } from "formik";
import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

type Props = {
  name: string;
  labelText: string;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const Textarea = (props: Props) => {
  const { name, labelText } = props;
  const [field, meta] = useField(props);
  // without label Text
  const withoutLabelText = { ...props };
  delete (
    withoutLabelText as Omit<Props, "labelText"> &
      Partial<Pick<Props, "labelText">>
  ).labelText;
  return (
    <div className="space-y-2 mb-2">
      <label htmlFor="content">{labelText}</label>
      <textarea
        {...field}
        {...withoutLabelText}
        className="resize-none w-full h-24 overflow-y-auto bg-white border-2 border-gray-200 p-2"
      />
      {meta.error && meta.touched && (
        <div className="text-red-500 flex items-center space-x-2">
          <FaExclamationCircle className="inline-block" />
          <span>{meta.error}</span>
        </div>
      )}
    </div>
  );
};

export default Textarea;
